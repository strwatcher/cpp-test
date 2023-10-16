import { Stack } from "@mantine/core";
import { ReactNode } from "react";
import s from "./s.module.css";

export type ListProps = {
  children: ReactNode;
};

export const List = (props: ListProps) => {
  return <Stack className={s.root}>{props.children}</Stack>;
};
