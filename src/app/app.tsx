import { RouterProvider } from "atomic-router-react";
import { router } from "./router";
export const App = () => {
  return (
    <RouterProvider router={router}>
      <>Hello</>
    </RouterProvider>
  );
};
