import {
  Comment,
  getOneMovieQuery,
  postCommentToMovieMutation,
} from "@/shared/api/movies";
import { rules } from "@/shared/lib/forms/rules";
import { Store, sample } from "effector";
import { createForm, useForm } from "effector-forms";
import { WriteCommentParams } from "./lib";
import { Id } from "@/shared/config/common";
import { routes } from "@/shared/config/routing";

export function writeComment(
  $comments: Store<Comment[]>,
  $movie: Store<{ id: Id }>
) {
  const commentForm = createForm<Comment>({
    validateOn: ["submit"],
    fields: {
      name: {
        init: "",
        rules: [rules.required()],
      },
      message: {
        init: "",
        rules: [rules.required()],
      },
    },
  });

  sample({
    clock: commentForm.formValidated,
    source: { comments: $comments, movie: $movie },
    fn: ({ comments, movie }, comment) => ({
      query: { id: movie.id },
      body: { comments: comments.concat(comment) },
    }),
    target: postCommentToMovieMutation.start,
  });

  sample({
    clock: postCommentToMovieMutation.finished.success,
    source: routes.movie.$params,
    target: [getOneMovieQuery.start, commentForm.reset],
  });

  function useWriteComment(): WriteCommentParams {
    const form = useForm(commentForm);

    return {
      form: {
        submit: form.submit,
        fields: {
          name: {
            value: form.fields.name.value,
            error: form.fields.name.errorText(),
            onChange: (e) => {
              form.fields.name.onChange(e.target.value);
            },
          },
          message: {
            value: form.fields.message.value,
            error: form.fields.message.errorText(),
            onChange: (e) => {
              form.fields.message.onChange(e.target.value);
            },
          },
        },
      },
    };
  }

  return { useWriteComment };
}
