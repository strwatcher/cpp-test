import { createRoute, createRouterControls } from "atomic-router";
import { Id } from "./common";

export type MovieRouteParams = { id: Id };

export const routes = {
  movies: createRoute(),
  movie: createRoute<MovieRouteParams>(),
  notFound: createRoute(),
};

export const routesMap = [
  { path: "/movies", route: routes.movies },
  { path: "/movies/:id", route: routes.movie },
];

export const controls = createRouterControls();
