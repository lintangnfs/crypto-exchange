import React, { FC } from "react";
import styled, { css } from "styled-components";

export interface IButton {
  children: React.ReactNode;
  onClick(): void;
  width?: string;
  radius?: string;
  type?: string;
}

const Button = styled.button<{
  width?: string;
  radius?: string;
  $type?: string;
}>`
  background: #f47820;
  border-radius: 8px;
  border: none;
  color: #fff;
  padding: 8px 16px;
  font-size: 16px;
  margin: 5px 0;
  cursor: pointer;
  ${(props) => {
    switch (props.$type) {
      case "info":
        return css`
          color: #000;
          background: #8080804d;
          width: ${props.width};
          border-radius: ${props.radius};
        `;
      case "info-small":
        return css`
          color: #000;
          background: #8080804d;
          padding: 4px 8px;
          font-size: 14px;
          width: ${props.width};
          border-radius: ${props.radius};
        `;
      default:
        return css`
          width: ${props.width};
          border-radius: ${props.radius};
        `;
    }
  }}
`;

const ButtonComponent: FC<IButton> = (props) => {
  const { children, onClick, width, radius, type } = props;
  return (
    <React.Fragment>
      <Button
        onClick={onClick ?? null}
        width={width}
        radius={radius}
        $type={type}
      >
        {children}
      </Button>
    </React.Fragment>
  );
};

export default ButtonComponent;
