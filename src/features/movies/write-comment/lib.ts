import { ChangeEvent } from "react";

type Field<EventSource extends HTMLElement> = {
  value: string;
  error: string;
  onChange: (e: ChangeEvent<EventSource>) => void;
};

export type WriteCommentParams = {
  form: {
    submit: () => void;
    fields: {
      name: Field<HTMLInputElement>;
      message: Field<HTMLTextAreaElement>;
    };
  };
};
