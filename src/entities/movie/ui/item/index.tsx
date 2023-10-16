import { Movie } from "@/shared/api/movies";
import { Group, Image, Paper, Stack, Title, Text } from "@mantine/core";
import s from "./s.module.css";
import { formatDuration } from "@/shared/lib/duration";
import { Rating } from "@/shared/ui";

export type MovieItemProps = {
  movie: Movie;
  onClick: (id: number) => void;
};

export const MovieItem = (props: MovieItemProps) => {
  return (
    <Paper className={s.root} onClick={() => props.onClick(props.movie.id)}>
      <Group wrap="nowrap" align="center">
        <Image className={s.image} src={props.movie.image} />

        <Stack className={s.info}>
          <Group>
            <Title size={"h4"}>{props.movie.title}</Title>
            <Rating value={props.movie.rating} readonly />
          </Group>
          <Text className={s.duration}>
            Duration: {formatDuration(props.movie.duration)}
          </Text>
        </Stack>
      </Group>
    </Paper>
  );
};
