import React from "react";

interface Option {
  id: string;
  name: string;
}

interface SelectProps {
  id: string;
  refEl?: React.RefObject<HTMLSelectElement>;
  onChangeEvent?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
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
  value,
  onChangeEvent,
  addlClass = "",
}: SelectProps) {
  return (
    <div className="text-2xl">
      <div className="control">
        <select
          id={id}
          ref={refEl}
          value={value}
          onChange={onChangeEvent}
          className="input p-1.5"
        >
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
