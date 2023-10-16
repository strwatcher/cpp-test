import { Group, Rating as R } from "@mantine/core";

export type RatingProps = {
  value: number;
  readonly?: boolean;
  onChange?: (value: number) => void;
};

export const Rating = (props: RatingProps) => {
  return (
    <Group wrap="nowrap">
      <R
        value={props.value}
        readOnly={props.readonly}
        onChange={props.onChange}
        fractions={10}
      />{" "}
      ({props.value})
    </Group>
  );
};
