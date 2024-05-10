import React from "react";

interface TextareaProps {
  id: string;
  value?: string;
  label: string;
  placeholder: string;
  onChangeEvent?: React.ChangeEventHandler<HTMLTextAreaElement>;
}
export function Textarea({
  id,
  label,
  placeholder,
  value,
  onChangeEvent,
}: TextareaProps) {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <textarea
          id={id}
          className="textarea"
          placeholder={placeholder}
          value={value}
          onChange={onChangeEvent}
        ></textarea>
      </div>
    </div>
  );
}
