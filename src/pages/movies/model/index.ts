import { getMoviesQuery } from "@/shared/api/movies";
import { routes } from "@/shared/config/routing";
import { RouteParamsAndQuery, chainRoute } from "atomic-router";
import { createEvent, sample } from "effector";
import { useUnit } from "effector-react";

export const beforeOpen = createEvent<RouteParamsAndQuery<{}>>();
export const openOn = getMoviesQuery.finished.success;
export const cancelOn = getMoviesQuery.finished.failure;

export const route = chainRoute({
  route: routes.movies,
  beforeOpen,
  openOn,
  cancelOn,
});

export const openMovieClicked = createEvent<number>();

sample({
  clock: beforeOpen,
  target: getMoviesQuery.start,
});

sample({
  clock: openMovieClicked,
  fn: (id) => ({ id }),
  target: routes.movie.open,
});

export function useMoviesModel() {
  return useUnit({
    openMovieClicked,
  });
}
