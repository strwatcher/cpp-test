import {
  Button,
  Group,
  InputLabel,
  Modal,
  NumberInput,
  Stack,
  TextInput,
  Textarea,
  Title,
} from "@mantine/core";
import { useCreateMovie } from "./model";
import { Form, Rating } from "@/shared/ui";

export const CreateMovie = () => {
  const { modal, form } = useCreateMovie();
  return (
    <>
      <Button onClick={modal.open}>Add movie</Button>
      <Modal centered opened={modal.opened} onClose={modal.close}>
        <Form onSubmit={form.submit}>
          <Stack>
            <Title>Add new movie</Title>
            <TextInput label="Title" {...form.fields.title} />
            <Textarea label="Description" {...form.fields.description} />

            <InputLabel>Rating</InputLabel>
            <Rating {...form.fields.rating} />

            <Stack gap={0}>
              <InputLabel>Duration</InputLabel>
              <Group wrap="nowrap">
                <NumberInput
                  allowNegative={false}
                  allowDecimal={false}
                  clampBehavior="strict"
                  placeholder="Hours"
                  {...form.fields.hours}
                />
                <NumberInput
                  allowDecimal={false}
                  allowNegative={false}
                  clampBehavior="strict"
                  max={59}
                  placeholder="Minutes"
                  {...form.fields.minutes}
                />
              </Group>
            </Stack>
            <TextInput label="Image" {...form.fields.image} />
            <Button type="submit">Save</Button>
          </Stack>
        </Form>
      </Modal>
    </>
  );
};
