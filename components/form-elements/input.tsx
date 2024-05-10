import React from "react";

interface InputProps {
  id: string;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
  refEl?: React.RefObject<HTMLInputElement>;
  label?: string;
  onChangeEvent?: React.ChangeEventHandler<HTMLInputElement>;
  addlClass?: string;
  children?: React.ReactNode;
}

export function Input({
  id,
  type = "text",
  placeholder = "",
  defaultValue = "",
  refEl = undefined,
  label = undefined,
  onChangeEvent,
  addlClass = "",
  children,
}: InputProps) {
  return (
    <div className={`field ${addlClass}`}>
      {label && <label className="label">{label}</label>}
      <div className="control">
        <input
          id={id}
          placeholder={placeholder}
          className="input"
          type={type}
          defaultValue={defaultValue}
          ref={refEl}
          onChange={onChangeEvent}
        ></input>
      </div>
      {children}
    </div>
  );
}
