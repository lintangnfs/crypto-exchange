import React, { FC, useState } from "react";
import styled from "styled-components";

export interface IInput {
  onChange?: (value) => void;
  isNumber?: boolean;
  value?: any;
}

const InputWrapper = styled.input<{}>`
  width: 100%;
  border: none;
  margin: 0;
  font-weight: inherit;
  font-size: inherit;
  &:focus,
  &:focus-visible {
    outline: none !important;
    box-shadow: none;
  }
`;

const Input: FC<IInput> = (props) => {
  const [value, setValue] = useState(null);

  const handleChange = (e) => {
    const temptValue = e.target.value;
    setValue(temptValue);
    if (props.onChange) {
      props.onChange(temptValue);
    }
  };

  return (
    <React.Fragment>
      <InputWrapper
        onChange={handleChange}
        value={value}
        type={props.isNumber ? "number" : "text"}
        min={0}
      />
    </React.Fragment>
  );
};

export default Input;
