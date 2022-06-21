import React from 'react';

import s from './Filter.module.css';

interface Props {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const Filter = ({ value, onChange }: Props) => {
  return (
    <label>
      <p className={s.label}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

export default Filter;


