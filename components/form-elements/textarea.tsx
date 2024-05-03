import React from "react";

interface TextareaProps {
  id: string;
  label: string;
  placeholder: string;
}
export function Textarea({ id, label, placeholder }: TextareaProps) {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <textarea
          id={id}
          className="textarea"
          placeholder={placeholder}
        ></textarea>
      </div>
    </div>
  );
}
