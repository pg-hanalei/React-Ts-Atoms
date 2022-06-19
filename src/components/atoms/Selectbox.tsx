import React, { memo } from "react";

interface Props {
  options: { value: string | number; label: string }[];
  defaultValue: { value: string | number; label: string };
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Selectbox: React.VFC<Props> = memo((props) => {
  const { options, defaultValue, onChange } = props;
  return (
    <select onChange={onChange} defaultValue={defaultValue.value}>
      {options.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
});
