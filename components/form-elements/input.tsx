import React from "react";

interface InputProps {
  id: string;
  type?: string;
  placeholder?: string;
  value?: string;
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
  value = "",
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
          value={value}
          ref={refEl}
          onChange={onChangeEvent}
        ></input>
      </div>
      {children}
    </div>
  );
}
