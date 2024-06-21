import React, { forwardRef } from "react";

interface InputProps {
  id: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  label?: string;
  onChangeEvent?: React.ChangeEventHandler<HTMLInputElement>;
  addlClass?: string;
  min?: string;
  children?: React.ReactNode;
}
function Input(
  {
    id,
    type = "text",
    placeholder = "",
    defaultValue = "",
    label = undefined,
    onChangeEvent,
    addlClass = "",
    children,
  }: InputProps,
  ref: React.Ref<HTMLInputElement>
) {
  return (
    <div className={`field ${addlClass} text-2xl`}>
      {label && <label className="label">{label}</label>}
      <div className="control">
        <input
          id={id}
          placeholder={placeholder}
          className="input"
          type={type}
          defaultValue={defaultValue}
          ref={ref}
          onChange={onChangeEvent}
        ></input>
      </div>
      {children}
    </div>
  );
}

export default forwardRef(Input);
