import React from "react";

interface Option {
  id: string;
  name: string;
}

interface SelectProps {
  id: string;
  refEl?: React.RefObject<HTMLSelectElement>;
  options: Option[];
  title: string;
  label?: string;
  addlClass?: string;
}

export function Select({
  id,
  refEl,
  options,
  title,
  label,
  addlClass = "",
}: SelectProps) {
  return (
    <div className="field is-expanded">
      {label ? <label className="label">{label}</label> : <></>}
      <div className={`select ${addlClass} is-fullwidth`}>
        <select id={id} ref={refEl}>
          <option value="0">{title}</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
