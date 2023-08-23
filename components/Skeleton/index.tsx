import React, { FC } from "react";
import styled, { css, keyframes } from "styled-components";

export interface ISkeleton {
  width?: string;
  height?: string;
  radius?: string;
  margin?: string;
}

const loading = keyframes`
  0% {background-color: hsl(200, 20%, 80%)};
  100% {background-color: hsl(200, 20%, 95%)};
`;

const GreyBlock = styled.div<{
  width?: string;
  height?: string;
  radius?: string;
  $margin?: string;
}>`
  width: 100%;
  height: 100%;
  min-height: 20px;
  border: none;
  border-radius: 0px;
  animation: ${loading} 1s linear infinite alternate;
  ${(props) =>
    css`
      width: ${props.width};
      min-height: ${props.height};
      height: ${props.height};
      border-radius: ${props.radius};
      margin: ${props.$margin};
    `};
`;

const Skeleton: FC<ISkeleton> = (props) => {
  const { width, height, radius, margin } = props;

  return (
    <React.Fragment>
      <GreyBlock
        width={width}
        height={height}
        radius={radius}
        $margin={margin}
      />
    </React.Fragment>
  );
};

export default Skeleton;
