import { getOneMovieQuery } from "@/shared/api/movies";
import { MovieRouteParams, routes } from "@/shared/config/routing";
import { RouteParamsAndQuery, chainRoute } from "atomic-router";
import { createEvent, sample } from "effector";

export const beforeOpen = createEvent<RouteParamsAndQuery<MovieRouteParams>>();
export const openOn = getOneMovieQuery.finished.success;
export const cancelOn = getOneMovieQuery.finished.failure;

export const route = chainRoute({
  route: routes.movie,
  beforeOpen,
  openOn,
  cancelOn,
});

export const $comments = getOneMovieQuery.$data.map(({ comments }) => comments);

sample({
  clock: beforeOpen,
  fn: ({ params }) => params,
  target: getOneMovieQuery.start,
});
