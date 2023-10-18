import { Movie } from "@/shared/api/movies";
import { ChangeEvent } from "react";

export type MoviesFilters = {
  minRating: number | "";
  maxRating: number | "";
  minHours: number | "";
  maxHours: number | "";
  minMinutes: number | "";
  maxMinutes: number | "";
  title: string;
};

type Field = {
  value: number | "";
  onChange: (v: number | "") => void;
};
export type MoviesFiltersParams = {
  filters: {
    minRating: Field;
    maxRating: Field;
    minHours: Field;
    maxHours: Field;
    minMinutes: Field;
    maxMinutes: Field;
    title: {
      value: string;
      onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    };
  };
};

function mapStringWhichMustBeNumbers(
  filters: MoviesFilters
): Omit<MoviesFilters, "title"> {
  const minRating =
    filters.minRating === "" ? "" : parseFloat(filters.minRating.toString());
  const maxRating =
    filters.maxRating === "" ? "" : parseFloat(filters.maxRating.toString());
  const minHours =
    filters.minHours === "" ? "" : parseInt(filters.minHours.toString());
  const minMinutes =
    filters.minMinutes === "" ? "" : parseInt(filters.minMinutes.toString());
  const maxHours =
    filters.maxHours === "" ? "" : parseInt(filters.maxHours.toString());
  const maxMinutes =
    filters.maxMinutes === "" ? "" : parseInt(filters.maxMinutes.toString());
  return { minRating, maxRating, minHours, minMinutes, maxHours, maxMinutes };
}

export function filterMovies(movies: Movie[], filters: MoviesFilters) {
  const { minRating, maxRating, minHours, minMinutes, maxHours, maxMinutes } =
    mapStringWhichMustBeNumbers(filters);

  return movies.filter((movie) => {
    if (minRating !== "" && movie.rating < minRating) return false;
    if (maxRating !== "" && movie.rating > maxRating) return false;

    if (
      minHours !== "" &&
      minMinutes !== "" &&
      movie.duration.hours * 60 + movie.duration.minutes <
      minHours * 60 + minMinutes
    )
      return false;

    if (
      maxHours !== "" &&
      maxMinutes !== "" &&
      movie.duration.hours * 60 + movie.duration.minutes >
      maxHours * 60 + maxMinutes
    )
      return false;

    if (!movie.title.includes(filters.title)) return false;
    return true;
  });
}
