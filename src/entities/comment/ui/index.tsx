import { Comment } from "@/shared/api/movies";
import { Paper, Stack, Title, Text } from "@mantine/core";

export type CommentItemProps = {
  comment: Comment;
};

export const CommentItem = (props: CommentItemProps) => {
  return (
    <Paper>
      <Stack>
        <Title size={"h3"}>{props.comment.name}</Title>
        <Text>{props.comment.message}</Text>
      </Stack>
    </Paper>
  );
};
