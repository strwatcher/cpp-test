import { FullMovie } from "@/entities/movie/ui";
import { getOneMovieQuery } from "@/shared/api/movies";
import { PageLayout } from "@/widgets/page-layout";
import { useUnit } from "effector-react";
import { CommentsList } from "./comments";
import { Stack, rem } from "@mantine/core";
import { useRateMovie } from "@/features/movies/rate/model";

export const MoviePage = () => {
  const movie = useUnit(getOneMovieQuery.$data);
  const { movieRatingChanged } = useRateMovie();
  return (
    <PageLayout title={movie.title}>
      <Stack gap={rem(32)}>
        <FullMovie onRatingChanged={movieRatingChanged} movie={movie} />
        <CommentsList />
      </Stack>
    </PageLayout>
  );
};
