import { Select, Stack } from "@mantine/core";
import { Title } from "@mantine/core";
import { SortParams, serializeSortParams, sortParamsData } from "./lib";

export type SortMoviesProps = {
  sortParams: SortParams | null;
  setSortParams: (params: string) => void;
};

export const SortMovies = (props: SortMoviesProps) => {
  return (
    <Stack>
      <Title size={"h2"}>Sort</Title>
      <Select
        data={sortParamsData}
        value={serializeSortParams(props.sortParams)}
        onChange={props.setSortParams}
      />
    </Stack>
  );
};
