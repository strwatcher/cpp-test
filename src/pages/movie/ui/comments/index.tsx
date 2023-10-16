import { List } from "@/shared/ui";
import { useList } from "effector-react";
import { $comments } from "../../model";
import { CommentItem } from "@/entities/comment/ui";
import { Title } from "@mantine/core";

export const CommentsList = () => {
  return (
    <List>
      <Title size={"h2"}>Comments</Title>
      {useList($comments, {
        fn: (comment) => <CommentItem comment={comment} />,
      })}
    </List>
  );
};
