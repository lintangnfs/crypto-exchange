import React, { FC } from "react";
import styled, { css } from "styled-components";

export interface IButton {
  children: React.ReactNode;
  onClick(): void;
  type?: "primary" | "secondary" | "others";
}

const Button = styled.button<{ $type?: string }>`
  background: #f47820;
  border-radius: 8px;
  border: none;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;
  ${(props) =>
    props.$type === "primary" &&
    css`
      background: #00355f;
      color: white;
    `};
`;

const ButtonComponent: FC<IButton> = (props) => {
  const { children, onClick } = props;
  return (
    <React.Fragment>
      <Button onClick={onClick ?? null}>{children}</Button>
    </React.Fragment>
  );
};

export default ButtonComponent;
