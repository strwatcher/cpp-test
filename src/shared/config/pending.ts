import { or } from "patronum";
import {
  postMovieMutation,
  getMoviesQuery,
  getOneMovieQuery,
  rateMovieMutation,
} from "../api/movies";

export const $pending = or(
  getMoviesQuery.$pending,
  getOneMovieQuery.$pending,
  postMovieMutation.$pending,
  rateMovieMutation.$pending
);
