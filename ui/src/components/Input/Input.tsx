import type React from "react";
import type { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  label: string;
  marginBottom?: string;
  setData: React.Dispatch<React.SetStateAction<string>>;
}

function Input({ label, marginBottom, setData, ...props }: InputProps) {
  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setData(target.value);
  };

  return (
    <div
      style={{
        marginBottom: marginBottom,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <label htmlFor={label}>{label}</label>
      <input
        name={label}
        id={label}
        {...props}
        onChange={(event) => onChange(event)}
      />
    </div>
  );
}

export default Input;
