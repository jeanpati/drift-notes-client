import React from "react";

interface Option {
  id: string;
  name: string;
}

interface SelectProps {
  id: string;
  refEl?: React.RefObject<HTMLSelectElement>;
  onChangeEvent?: React.ChangeEventHandler<HTMLSelectElement>;
  options: Option[];
  title: string;
  label?: string;
  value?: string;
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
    <div className="text-2xl">
      {label && <label className="label">{label}</label>}
      <div className="control">
        <select id={id} ref={refEl} className="input p-1.5">
          <option value="0">{title}</option>
          {options.map((option) => (
            <option key={option.id} value={option.id} className="">
              {option.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
