import {
  Box,
  Group,
  InputLabel,
  NumberInput,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { MoviesFiltersParams } from "../lib";
import s from "./s.module.css";

export type MoviesFiltersProps = MoviesFiltersParams;
export const MoviesFilters = (props: MoviesFiltersProps) => {
  return (
    <Stack>
      <Title size={"h2"}>Filters</Title>
      <Box className={s.filtersGroup}>
        <TextInput label={"Title"} {...props.filters.title} />
        <NumberInput label={"Min rating"} {...props.filters.minRating} />
        <NumberInput label={"Max rating"} {...props.filters.maxRating} />
        <Stack gap={0}>
          <InputLabel>Min duration</InputLabel>
          <Group wrap="nowrap">
            <NumberInput allowDecimal {...props.filters.minHours} />
            :
            <NumberInput allowDecimal {...props.filters.minMinutes} />
          </Group>
        </Stack>
        <Stack gap={0}>
          <InputLabel>Max duration</InputLabel>
          <Group wrap="nowrap">
            <NumberInput allowNegative={false} {...props.filters.maxHours} />
            :
            <NumberInput allowNegative={false} {...props.filters.maxMinutes} />
          </Group>
        </Stack>
      </Box>
    </Stack>
  );
};
