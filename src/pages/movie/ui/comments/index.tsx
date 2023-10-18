import { List } from "@/shared/ui";
import { useList } from "effector-react";
import { $comments, useWriteComment } from "../../model";
import { CommentItem } from "@/entities/comment/ui";
import { Title } from "@mantine/core";
import { WriteComment } from "@/features/movies/write-comment";

export const CommentsList = () => {
  const { form } = useWriteComment();
  return (
    <List>
      <Title size={"h2"}>Comments</Title>
      {useList($comments, {
        fn: (comment) => <CommentItem comment={comment} />,
      })}
      <WriteComment form={form} />
    </List>
  );
};
