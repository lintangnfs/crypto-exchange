import React, { FC } from "react";
import styled, { css } from "styled-components";

export interface IButton {
  children: React.ReactNode;
  onClick(): void;
  width?: string;
  radius?: string;
  color?: string;
  info?: boolean;
}

const Button = styled.button<{
  width?: string;
  radius?: string;
  color?: string;
  $info?: boolean;
}>`
  background: #f47820;
  border-radius: 8px;
  border: none;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;
  margin: 5px 0;
  cursor: pointer;
  ${(props) =>
    css`
      width: ${props.width};
      color: ${props.$info ? "#000" : "#fff"};
      background: ${props.$info ? "#8080804d" : "#f47820"};
      padding: ${props.$info ? "4px 8px" : "8px 16px"};
      font-size: ${props.$info ? "14px" : "16px"};
      border-radius: ${props.radius};
    `};
`;

const ButtonComponent: FC<IButton> = (props) => {
  const { children, onClick, width, radius, info } = props;
  return (
    <React.Fragment>
      <Button
        onClick={onClick ?? null}
        width={width}
        radius={radius}
        $info={info}
      >
        {children}
      </Button>
    </React.Fragment>
  );
};

export default ButtonComponent;
