import React, { FC } from "react";
import styled from "styled-components";
import Input from "./Input";

export interface IInput {
  label?: string;
  value?: any;
  onChange?: (value) => void;
}

const InputWrapper = styled.div<{}>`
  border: none;
  margin: 0;
  font-weight: 600;
  font-size: 28px;
  display: flex;
  gap: 5px;
  align-items: center;
  margin: 10px 0;
  border-bottom: solid 1px #8080804d;
`;

const Label = styled.label<{}>`
  font-weight: 600;
  font-size: 28px;
`;

const PriceInput: FC<IInput> = (props) => {
  return (
    <React.Fragment>
      <InputWrapper>
        <Label>{props.label ?? "$"}</Label>
        <Input isNumber value={props.value} onChange={props.onChange} />
      </InputWrapper>
    </React.Fragment>
  );
};

export default PriceInput;
