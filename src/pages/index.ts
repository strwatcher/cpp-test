import { createRoutesView } from "atomic-router-react";
import { MoviesRoute } from "./movies";
import { MovieRoute } from "./movie";
export const Pages = createRoutesView({
  routes: [MoviesRoute, MovieRoute],
});
