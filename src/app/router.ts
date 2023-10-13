import { appStarted } from "@/shared/config";
import { routes, routesMap } from "@/shared/config/routing";
import { createHistoryRouter } from "atomic-router";
import { sample } from "effector";
import { createBrowserHistory } from "history";

export const router = createHistoryRouter({
  routes: routesMap,
  notFoundRoute: routes.notFound,
});

sample({
  clock: routes.notFound.opened,
  target: routes.movies.open,
});

sample({
  clock: appStarted,
  fn: () => createBrowserHistory(),
  target: router.setHistory,
});
