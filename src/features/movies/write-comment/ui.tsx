import { Form } from "@/shared/ui";
import { Button, Stack, TextInput, Textarea, Title } from "@mantine/core";
import { WriteCommentParams } from "./lib";

export type WriteCommentProps = WriteCommentParams;

export const WriteComment = (props: WriteCommentProps) => {
  return (
    <Form onSubmit={props.form.submit}>
      <Stack>
        <Title>Write comment</Title>
        <TextInput label="Name" {...props.form.fields.name} />
        <Textarea label="Message" {...props.form.fields.message} />
        <Button type="submit">Send</Button>
      </Stack>
    </Form>
  );
};
