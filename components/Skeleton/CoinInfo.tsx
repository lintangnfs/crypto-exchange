import Skeleton from ".";
import React, { FC } from "react";
import styled from "styled-components";

export interface ISkeletonCoinInfo {}

const Wrapper = styled.div<{
  width?: string;
  height?: string;
  rounded?: boolean;
}>`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 18px;
`;

const SkeletonCoinInfo: FC<ISkeletonCoinInfo> = (props) => {
  return (
    <React.Fragment>
      <Wrapper>
        <Skeleton width="32px" height="32px" radius="50px" />
        <div>
          <Skeleton
            width="60px"
            height="18pxpx"
            radius="4px"
            margin="0 0 10px"
          />
          <Skeleton width="63px" height="16px" radius="4px" margin="5px 0 0" />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default SkeletonCoinInfo;
