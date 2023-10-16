import { Movie } from "@/shared/api/movies";
import { formatDuration } from "@/shared/lib/duration";
import { Rating } from "@/shared/ui";
import { Group, Image, Stack, Title, Text, Box } from "@mantine/core";
import s from "./s.module.css";

export type FullMovieProps = {
  movie: Movie;
  onRatingChanged: (rating: number) => void;
};
export const FullMovie = (props: FullMovieProps) => {
  return (
    <Box className={s.root}>
      <Image src={props.movie.image} />
      <Stack>
        <Group>
          <Title size={"h1"}>{props.movie.title}</Title>
          <Rating onChange={props.onRatingChanged} value={props.movie.rating} />
        </Group>
        <Group>
          <Title size={"h4"}>Duration</Title>
          <Text>{formatDuration(props.movie.duration)}</Text>
        </Group>
        <Group>
          <Title size={"h4"}>Description</Title>
          <Text>{props.movie.description}</Text>
        </Group>
      </Stack>
    </Box>
  );
};
