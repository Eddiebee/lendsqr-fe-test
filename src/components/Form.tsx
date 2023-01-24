import { ReactNode } from "react";

type FormProps = {
  children?: ReactNode;
};

const Form = ({ children }: FormProps) => {
  return <form>{children}</form>;
};

export default Form;
