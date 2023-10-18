import { createApi, createStore, sample } from "effector";
import { useUnit } from "effector-react";
import { createForm, useForm } from "effector-forms";
import { ChangeEvent } from "react";
import { PostMovieForm, mapFormToDto } from "./lib";
import { getMoviesQuery, postMovieMutation } from "@/shared/api/movies";
import { rules } from "@/shared/lib/forms/rules";

const $createMovieModalOpened = createStore(false);

const createMovieModalApi = createApi($createMovieModalOpened, {
  open: () => true,
  close: () => false,
});

const createMovieForm = createForm<PostMovieForm>({
  validateOn: ["submit"],
  fields: {
    title: {
      init: "",
      rules: [rules.required()],
    },
    description: {
      init: "",
      rules: [rules.required()],
    },
    hours: {
      init: "",
      rules: [rules.required()],
    },
    minutes: {
      init: "",
      rules: [rules.required()],
    },
    rating: {
      init: 0,
      rules: [rules.required()],
    },
    image: {
      init: "",
      rules: [rules.required()],
    },
  },
});

sample({
  clock: createMovieForm.formValidated,
  fn: mapFormToDto,
  target: postMovieMutation.start,
});

sample({
  clock: postMovieMutation.finished.success,
  target: [
    getMoviesQuery.start,
    createMovieForm.reset,
    createMovieModalApi.close,
  ],
});

export function useCreateMovie() {
  const form = useForm(createMovieForm);
  return {
    modal: useUnit({
      opened: $createMovieModalOpened,
      ...createMovieModalApi,
    }),
    form: {
      submit: form.submit,
      fields: {
        title: {
          value: form.fields.title.value,
          onChange: (e: ChangeEvent<HTMLInputElement>) =>
            form.fields.title.onChange(e.target.value),
          error: form.fields.title.errorText(),
        },
        description: {
          value: form.fields.description.value,
          onChange: (e: ChangeEvent<HTMLTextAreaElement>) =>
            form.fields.description.onChange(e.target.value),
          error: form.fields.description.errorText(),
        },
        hours: {
          value: form.fields.hours.value,
          onChange: form.fields.hours.onChange,
          error: form.fields.hours.errorText(),
        },
        minutes: {
          value: form.fields.minutes.value,
          onChange: form.fields.minutes.onChange,
          error: form.fields.minutes.errorText(),
        },
        rating: {
          value: form.fields.rating.value,
          onChange: (rating: number) => form.fields.rating.onChange(rating),
          error: form.fields.rating.errorText(),
        },
        image: {
          value: form.fields.image.value,
          onChange: (e: ChangeEvent<HTMLInputElement>) =>
            form.fields.image.onChange(e.target.value),
          error: form.fields.image.errorText(),
        },
      },
    },
  };
}
