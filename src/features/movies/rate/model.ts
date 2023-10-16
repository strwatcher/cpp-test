import { getOneMovieQuery, rateMovieMutation } from "@/shared/api/movies";
import { routes } from "@/shared/config/routing";
import { createEvent, sample } from "effector";
import { useUnit } from "effector-react";

export const movieRatingChanged = createEvent<number>();

sample({
  clock: movieRatingChanged,
  source: routes.movie.$params,
  fn: ({ id }, rating) => ({ query: { id }, body: { rating } }),
  target: rateMovieMutation.start,
});

sample({
  clock: rateMovieMutation.finished.success,
  source: routes.movie.$params,
  filter: routes.movie.$isOpened,
  target: getOneMovieQuery.start,
});

export function useRateMovie() {
  return useUnit({ movieRatingChanged });
}
