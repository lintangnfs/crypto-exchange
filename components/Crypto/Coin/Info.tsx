import React, { FC } from "react";
import styled from "styled-components";
import CoinImage from "./Image";

export interface ICoinInfo {
  image?: string;
  code?: string;
  name?: string;
}

const Wrapper = styled.div<{}>`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 18px;
`;

const NameWrapper = styled.div<{}>`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Code = styled.p<{}>`
  font-size: 16px;
  font-weight: 600;
  color: #1e2329;
  margin: 0;
`;

const Name = styled.p<{}>`
  font-size: 14px;
  color: #808080;
  margin: 0;
`;

const CoinInfo: FC<ICoinInfo> = (props) => {
  return (
    <React.Fragment>
      <Wrapper>
        <CoinImage
          image={props.image}
          name={props.name}
          height={32}
          width={32}
        />
        <NameWrapper>
          <Code>{props.code}</Code>
          {props.name && <Name>{props.name}</Name>}
        </NameWrapper>
      </Wrapper>
    </React.Fragment>
  );
};

export default CoinInfo;
