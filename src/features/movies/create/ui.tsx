import { Button, Modal, TextInput } from "@mantine/core";
import { useCreateMovie } from "./model";

export const CreateMovie = () => {
  const { modal, form } = useCreateMovie();
  return (
    <>
      <Button onClick={modal.open}>Add movie</Button>
      <Modal opened={modal.opened} onClose={modal.close}>
        <form>
          <TextInput label="Title" {...form.fields.title} />
        </form>
      </Modal>
    </>
  );
};
