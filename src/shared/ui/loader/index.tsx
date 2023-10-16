import { LoadingOverlay } from "@mantine/core";
export type LoaderProps = {
  visible: boolean;
};

export const Loader = (props: LoaderProps) => {
  return <LoadingOverlay visible={props.visible} />;
};
