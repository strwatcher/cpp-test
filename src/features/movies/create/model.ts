import { createApi, createEvent, createStore, sample } from "effector";
import { createForm, useForm } from "effector-forms";
import { ChangeEvent } from "react";
import { PostMovieForm, mapFormToDto } from "./lib";
import { getMoviesQuery, postMovieMutation } from "@/shared/api/movies";
import { rules } from "@/shared/lib/forms/rules";
import { persist } from "effector-storage/local";
import { not } from "patronum";
import { useUnit } from "effector-react";

const $createMovieModalOpened = createStore(false);

const addMovieButtonClicked = createEvent();
const closeButtonClicked = createEvent();

const createMovieModalApi = createApi($createMovieModalOpened, {
  open: () => true,
  close: () => false,
});

const $loadSavedMovieModalOpened = createStore(false);
const loadSavedMovieModalApi = createApi($loadSavedMovieModalOpened, {
  open: () => true,
  close: () => false,
});
const chooseNotToLoadSavedData = createEvent();
const chooseToLoadSavedData = createEvent();

const $savedMovieFormData = createStore<PostMovieForm | null>(null);
const { eraseSavedMovieFormData } = createApi($savedMovieFormData, {
  eraseSavedMovieFormData: () => null,
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

persist({ store: $savedMovieFormData, key: "createMovie" });

sample({
  clock: addMovieButtonClicked,
  filter: $savedMovieFormData.map(Boolean),
  target: loadSavedMovieModalApi.open,
});

sample({
  clock: addMovieButtonClicked,
  filter: not($savedMovieFormData),
  target: createMovieModalApi.open,
});

sample({
  clock: chooseToLoadSavedData,
  source: $savedMovieFormData,
  filter: Boolean,
  target: [
    createMovieForm.setForm,
    loadSavedMovieModalApi.close,
    createMovieModalApi.open,
  ],
});

sample({
  clock: chooseNotToLoadSavedData,
  target: [
    loadSavedMovieModalApi.close,
    createMovieModalApi.open,
    createMovieForm.reset,
    eraseSavedMovieFormData,
  ],
});

sample({
  clock: closeButtonClicked,
  target: [loadSavedMovieModalApi.close, createMovieModalApi.close],
});

sample({
  clock: createMovieForm.$values,
  target: $savedMovieFormData,
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
    modals: useUnit({
      addMovieButtonClicked,
      chooseToLoadSavedData,
      chooseNotToLoadSavedData,
      createOpened: $createMovieModalOpened,
      loadDataOpened: $loadSavedMovieModalOpened,
      closeButtonClicked,
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
