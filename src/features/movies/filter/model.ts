import { Movie } from "@/shared/api/movies";
import { Store, createStore, sample } from "effector";
import { createForm, useForm } from "effector-forms";
import { MoviesFilters, MoviesFiltersParams, filterMovies } from "./lib";
import { debounce } from "patronum";
import { querySync } from "atomic-router";
import { controls, routes } from "@/shared/config/routing";

export function filterMoviesModel($movies: Store<Movie[]>) {
  const filters = createForm<MoviesFilters>({
    fields: {
      minRating: {
        init: "",
      },
      maxRating: {
        init: "",
      },
      minHours: {
        init: "",
      },
      maxHours: {
        init: "",
      },
      minMinutes: {
        init: "",
      },
      maxMinutes: {
        init: "",
      },
      title: {
        init: "",
      },
    },
  });

  const debouncedFiltersChange = debounce({
    source: filters.$values,
    timeout: 500,
  });

  const $filtered = createStore<Movie[]>([]);

  sample({
    clock: $movies,
    source: filters.$values,
    fn: (filters, movies) => filterMovies(movies, filters),
    target: $filtered,
  });

  sample({
    clock: debouncedFiltersChange,
    source: { movies: $movies, filters: filters.$values },
    fn: ({ movies, filters }) => filterMovies(movies, filters),
    target: $filtered,
  });

  querySync({
    clock: debouncedFiltersChange,
    source: {
      minRating: filters.fields.minRating.$value,
      maxRating: filters.fields.maxRating.$value,
      minHours: filters.fields.minHours.$value,
      minMinutes: filters.fields.minMinutes.$value,
      maxHours: filters.fields.maxHours.$value,
      maxMinutes: filters.fields.maxMinutes.$value,
      title: filters.fields.title.$value,
    },
    route: routes.movies,
    controls,
  });

  function useMoviesFilters(): MoviesFiltersParams {
    const form = useForm(filters);
    return {
      filters: {
        minRating: {
          value: form.fields.minRating.value,
          onChange: form.fields.minRating.onChange,
        },
        maxRating: {
          value: form.fields.maxRating.value,
          onChange: form.fields.maxRating.onChange,
        },
        minHours: {
          value: form.fields.minHours.value,
          onChange: form.fields.minHours.onChange,
        },
        maxHours: {
          value: form.fields.maxHours.value,
          onChange: form.fields.maxHours.onChange,
        },
        minMinutes: {
          value: form.fields.minMinutes.value,
          onChange: form.fields.minMinutes.onChange,
        },
        maxMinutes: {
          value: form.fields.maxMinutes.value,
          onChange: form.fields.maxMinutes.onChange,
        },
        title: {
          value: form.fields.title.value,
          onChange: (e) => form.fields.title.onChange(e.target.value),
        },
      },
    };
  }

  return { useMoviesFilters, $filtered };
}
