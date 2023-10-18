import { Movie } from "@/shared/api/movies";
import { Store, createEvent, createStore, sample } from "effector";
import { deserializeSortParams, sortMovies } from "./lib";
import { useUnit } from "effector-react";
import { querySync } from "atomic-router";
import { controls, routes } from "@/shared/config/routing";

export function sortMoviesModel($movies: Store<Movie[]>) {
  const $sorted = createStore<Movie[]>([]);

  const setSortParams = createEvent<string>();
  const $routeSortParams = createStore<string>("");

  const $sortParams = $routeSortParams.map(deserializeSortParams);

  querySync({
    source: { sort: $routeSortParams },
    route: routes.movies,
    controls,
  });

  sample({
    clock: $movies,
    source: $sortParams,
    fn: (params, movies) => sortMovies(movies, params),
    target: $sorted,
  });

  sample({
    clock: setSortParams,
    target: $routeSortParams,
  });

  sample({
    clock: $sortParams,
    source: $movies,
    fn: sortMovies,
    target: $sorted,
  });

  function useSortMovies() {
    return useUnit({
      setSortParams,
      sortParams: $sortParams,
    });
  }

  return { $sorted, useSortMovies };
}
