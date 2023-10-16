import { RouterProvider } from "atomic-router-react";
import { router } from "./router";
import { Pages } from "@/pages";
import { MantineProvider } from "@mantine/core";
import { useUnit } from "effector-react";
import { $pending } from "@/shared/config/pending";
import { Loader } from "@/shared/ui";
export const App = () => {
  const pending = useUnit($pending);
  return (
    <RouterProvider router={router}>
      <MantineProvider withCssVariables>
        <Loader visible={pending} />
        <Pages />
      </MantineProvider>
    </RouterProvider>
  );
};
