import { InputHTMLAttributes } from "react";

type InputProps = {
  type: string;
  title: string;
  placeholder?: string;
  name?: string;
  value?: string;
  handleChange: () => void;
};

const Input = ({
  type,
  title,
  placeholder,
  name,
  value,
  handleChange,
}: InputProps) => {
  return (
    <input
      type={type}
      title={title}
      placeholder={placeholder ?? ""}
      name={name || title}
      onChange={(e) => handleChange()}
    />
  );
};

export default Input;
