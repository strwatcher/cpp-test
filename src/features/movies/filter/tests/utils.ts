import { Movie } from "@/shared/api/movies";
import { MoviesFilters } from "../lib";
import { movies } from "@/shared/tests";

export const emptyFilters: MoviesFilters = {
  title: "",
  maxRating: "",
  minRating: "",
  maxMinutes: "",
  minMinutes: "",
  minHours: "",
  maxHours: "",
};

export const filtersWithMinAndMaxRating: MoviesFilters = {
  ...emptyFilters,
  minRating: 4.5,
  maxRating: 4.67,
};
export const moviesFilteredByRating: Movie[] = [movies[2]];

export const filtersWithMinAndMaxHours: MoviesFilters = {
  ...emptyFilters,
  minHours: 1,
  maxHours: 1,
};
export const filtersWithMinAndMaxMinutes: MoviesFilters = {
  ...emptyFilters,
  minMinutes: 1,
  maxMinutes: 1,
};

export const filtersWithMinAndMaxDuration: MoviesFilters = {
  ...emptyFilters,

  minHours: 2,
  maxHours: 2,
  minMinutes: 1,
  maxMinutes: 25,
};

export const moviesFilteredByDuration: Movie[] = [movies[2]];

export const filtersWithTitle: MoviesFilters = {
  ...emptyFilters,
  title: "Bar",
};

export const moviesFilteredByTitle: Movie[] = [movies[0]];

export const filters: MoviesFilters = {
  minRating: 4.5,
  maxRating: 4.67,
  minHours: 1,
  maxHours: 2,
  minMinutes: 0,
  maxMinutes: 59,
  title: "The",
};
export const filteredMovies: Movie[] = [movies[2]];

export const filtersWithEmptyResult: MoviesFilters = {
  minRating: 4.5,
  maxRating: 4.67,
  minHours: 1,
  maxHours: 2,
  minMinutes: 0,
  maxMinutes: 59,
  title: "Tom",
};
export const emptyMovies: Movie[] = [];
