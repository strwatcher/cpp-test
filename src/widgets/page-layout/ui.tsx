import { Box, Group, Stack, Title } from "@mantine/core";

import s from "./s.module.css";
import { ReactNode } from "react";
import { BackButton } from "@/entities/navigation";

export type PageLayoutProps = {
  children: ReactNode;
  title?: string;
  rightSection?: ReactNode;
};

export const PageLayout = (props: PageLayoutProps) => {
  return (
    <Stack className={s.root}>
      <Group className={s.header} justify="space-between">
        <Group>
          <BackButton />
          <Title size={"h3"} className={s.title}>
            {props.title}
          </Title>
        </Group>
        {props.rightSection}
      </Group>
      <Box className={s.content}>{props.children}</Box>
    </Stack>
  );
};
