import { InputHTMLAttributes } from "react";

type InputProps = {
  type: string;
  title: string;
  placeholder?: string;
  name?: string;
};

const Input = ({ type, title, placeholder, name }: InputProps) => {
  return (
    <input
      type={type}
      title={title}
      placeholder={placeholder ?? ""}
      name={name || title}
    />
  );
};

export default Input;
