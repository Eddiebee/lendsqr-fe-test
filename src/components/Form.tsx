import { ReactNode, SyntheticEvent } from "react";

type FormProps = {
  children?: ReactNode;
  handleSubmit: (e: SyntheticEvent) => void;
};

const Form = ({ children, handleSubmit }: FormProps) => {
  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
