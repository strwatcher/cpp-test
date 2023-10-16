import { MovieItem } from "@/entities/movie";
import { getMoviesQuery } from "@/shared/api/movies";
import { List } from "@/shared/ui";
import { useList } from "effector-react";
import { useMoviesModel } from "../model";

export const MoviesList = () => {
  const { openMovieClicked } = useMoviesModel();

  return (
    <List>
      {useList(getMoviesQuery.$data, {
        fn: (movie) => <MovieItem onClick={openMovieClicked} movie={movie} />,
        getKey: (movie) => movie.id,
      })}
    </List>
  );
};
