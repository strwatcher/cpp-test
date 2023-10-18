import { filterMoviesModel } from "@/features/movies/filter";
import { sortMoviesModel } from "@/features/movies/sort/model";
import { Movie, getMoviesQuery } from "@/shared/api/movies";
import { routes } from "@/shared/config/routing";
import { RouteParamsAndQuery, chainRoute } from "atomic-router";
import { createEvent, createStore, sample } from "effector";
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
export const $movies = createStore<Movie[]>([]);

sample({
  clock: getMoviesQuery.finished.success,
  fn: ({ result }) => result,
  target: $movies,
});

sample({
  clock: beforeOpen,
  target: getMoviesQuery.start,
});

sample({
  clock: openMovieClicked,
  fn: (id) => ({ id }),
  target: routes.movie.open,
});

export const { useMoviesFilters, $filtered } = filterMoviesModel($movies);
export const { useSortMovies, $sorted } = sortMoviesModel($filtered);

export function useMoviesModel() {
  return useUnit({
    openMovieClicked,
  });
}
