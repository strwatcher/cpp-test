import { createApi, createStore } from "effector";
import { useUnit } from "effector-react";
import { createForm, useForm } from "effector-forms";
import { PostMovieMutationParams } from "@/shared/api/movies";
import { ChangeEvent } from "react";
import { Duration } from "@/shared/lib/duration";

const $createMovieModalOpened = createStore(false);

const createMovieModalApi = createApi($createMovieModalOpened, {
  open: () => true,
  close: () => false,
});

const createMovieForm = createForm<PostMovieMutationParams["body"]>({
  validateOn: ["submit"],
  fields: {
    title: {
      init: "",
    },
    duration: {
      init: {
        hours: 0,
        minutes: 0,
      },
    },
    description: {
      init: "",
    },
    rating: { init: 0 },
    image: {
      init: "",
    },
  },
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
        duration: {
          value: form.fields.duration.value,
          onChange: (duration: Duration) =>
            form.fields.duration.onChange(duration),
          error: form.fields.duration.errorText(),
        },
        rating: {
          value: form.fields.rating.value,
          onChange: (rating: number) => form.fields.rating.onChange(rating),
          error: form.fields.rating.errorText(),
        },
        image: {
          value: form.fields.image.value,
          onChange: (image: string) => form.fields.image.onChange(image),
          error: form.fields.image.errorText(),
        },
      },
    },
  };
}
