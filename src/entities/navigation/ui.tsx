import { ActionIcon } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useNavigation } from "./model";

export const BackButton = () => {
  const navigation = useNavigation();

  if (!navigation.backButtonVisible) return null;

  return (
    <ActionIcon variant="transparent" onClick={navigation.backButtonClicked}>
      <IconArrowLeft />
    </ActionIcon>
  );
};
