import { controls, routes } from "@/shared/config/routing";
import { createEvent, sample } from "effector";
import { useUnit } from "effector-react";
import { not } from "patronum";

const $isMainRouteOpened = routes.movies.$isOpened;
const $backButtonVisible = not($isMainRouteOpened);
const backButtonClicked = createEvent();

sample({
  clock: backButtonClicked,
  filter: $backButtonVisible,
  target: controls.back,
});

export function useNavigation() {
  return useUnit({
    backButtonVisible: $backButtonVisible,
    backButtonClicked,
  });
}
