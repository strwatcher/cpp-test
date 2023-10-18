import { MovieItem } from "@/entities/movie";
import { List } from "@/shared/ui";
import { useList } from "effector-react";
import { $sorted, useMoviesModel } from "../model";

export const MoviesList = () => {
  const { openMovieClicked } = useMoviesModel();

  return (
    <List>
      {useList($sorted, {
        fn: (movie) => <MovieItem onClick={openMovieClicked} movie={movie} />,
        getKey: (movie) => movie.id,
      })}
    </List>
  );
};
