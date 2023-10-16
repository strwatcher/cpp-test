import { appStarted } from "@/shared/config";
import ReactDOM from "react-dom/client";
import { App } from "./app";
import "@mantine/core/styles.css";
import "./styles/index.css";

appStarted();

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
