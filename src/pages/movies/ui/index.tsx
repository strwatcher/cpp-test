import { PageLayout } from "@/widgets/page-layout";
import { MoviesList } from "./list";
import { CreateMovie } from "@/features/movies/create";
import { MoviesFilters } from "@/features/movies/filter";
import { useMoviesFilters, useSortMovies } from "../model";
import { Stack } from "@mantine/core";
import { SortMovies } from "@/features/movies/sort";

export const MoviesPage = () => {
  const filtersModel = useMoviesFilters();
  const sortModel = useSortMovies();
  return (
    <PageLayout title="Movies" rightSection={<CreateMovie />}>
      <Stack>
        <MoviesFilters {...filtersModel} />
        <SortMovies {...sortModel} />
        <MoviesList />
      </Stack>
    </PageLayout>
  );
};
