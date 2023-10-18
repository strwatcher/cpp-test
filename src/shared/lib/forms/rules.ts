import { Rule } from "effector-forms";

export const rules = {
  required: (): Rule<number | string> => ({
    name: "required",
    validator: (value: string | number) => value !== "",
    errorText: "Field is required",
  }),
};
