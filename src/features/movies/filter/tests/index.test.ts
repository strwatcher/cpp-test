import { describe, expect, it } from "vitest";
import {
  emptyFilters,
  moviesFilteredByRating,
  filtersWithMinAndMaxRating,
  filtersWithMinAndMaxHours,
  filtersWithMinAndMaxMinutes,
  filtersWithMinAndMaxDuration,
  moviesFilteredByDuration,
  filtersWithTitle,
  moviesFilteredByTitle,
  filteredMovies,
  filters,
  filtersWithEmptyResult,
  emptyMovies,
} from "./utils";
import { filterMovies } from "../lib";
import { movies } from "@/shared/tests";

describe("Function which filters movies by title, (min, max)Rating (min, max)Duration", () => {
  it("With empty filters do nothing", () => {
    expect(filterMovies(movies, emptyFilters)).toStrictEqual(movies);
  });
  it("With min and max rating", () => {
    expect(filterMovies(movies, filtersWithMinAndMaxRating)).toStrictEqual(
      moviesFilteredByRating
    );
  });
  it("With only minHours and maxHours do nothing", () => {
    expect(filterMovies(movies, filtersWithMinAndMaxHours)).toStrictEqual(
      movies
    );
  });
  it("With only minMinutes and maxMinutes do nothing", () => {
    expect(filterMovies(movies, filtersWithMinAndMaxMinutes)).toStrictEqual(
      movies
    );
  });
  it("With min and max duration", () => {
    expect(filterMovies(movies, filtersWithMinAndMaxDuration)).toStrictEqual(
      moviesFilteredByDuration
    );
  });
  it("With title", () => {
    expect(filterMovies(movies, filtersWithTitle)).toStrictEqual(
      moviesFilteredByTitle
    );
  });
  it("With all filters", () => {
    expect(filterMovies(movies, filters)).toStrictEqual(filteredMovies);
  });
  it("When no matches result is empty", () => {
    expect(filterMovies(movies, filtersWithEmptyResult)).toStrictEqual(
      emptyMovies
    );
  });
});
