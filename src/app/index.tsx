import { appStarted } from "@/shared/config";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import { sample } from "effector";
import { getMoviesQuery } from "@/shared/api/movies";

sample({
  clock: appStarted,
  target: getMoviesQuery.start,
});

appStarted();

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
