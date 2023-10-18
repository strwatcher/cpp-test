import { describe, expect, it } from "vitest";
import { sortMovies } from "../lib";
import { movies } from "@/shared/tests";
import {
  moviesSortedByDurationAsc,
  moviesSortedByDurationDesc,
  moviesSortedByRatingAsc,
  moviesSortedByRatingDesc,
  moviesSortedByTitleAsc,
  moviesSortedByTitleDesc,
} from "./utils";

describe("Sort movies by given field and order it", () => {
  it("Sort by rating asc", () => {
    expect(sortMovies(movies, { field: "rating", order: "asc" })).toStrictEqual(
      moviesSortedByRatingAsc
    );
  });
  it("Sort by rating desc", () => {
    expect(
      sortMovies(movies, { field: "rating", order: "desc" })
    ).toStrictEqual(moviesSortedByRatingDesc);
  });
  it("Sort by duration asc", () => {
    expect(
      sortMovies(movies, { field: "duration", order: "asc" })
    ).toStrictEqual(moviesSortedByDurationAsc);
  });
  it("Sort by duration desc", () => {
    expect(
      sortMovies(movies, { field: "duration", order: "desc" })
    ).toStrictEqual(moviesSortedByDurationDesc);
  });
  it("Sort by title asc", () => {
    expect(sortMovies(movies, { field: "title", order: "asc" })).toStrictEqual(
      moviesSortedByTitleAsc
    );
  });
  it("Sort by rating asc", () => {
    expect(sortMovies(movies, { field: "title", order: "desc" })).toStrictEqual(
      moviesSortedByTitleDesc
    );
  });
  it("With sort params eq to null do nothing", () => {
    expect(sortMovies(movies, null)).toStrictEqual(movies);
  });
});
