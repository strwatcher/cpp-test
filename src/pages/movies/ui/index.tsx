import { PageLayout } from "@/widgets/page-layout";
import { MoviesList } from "./list";
import { CreateMovie } from "@/features/movies/create";

export const MoviesPage = () => {
  return (
    <PageLayout title="Movies" rightSection={<CreateMovie />}>
      <MoviesList />
    </PageLayout>
  );
};
