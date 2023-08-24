import React, { FC, useState } from "react";
import styled, { css } from "styled-components";
import CurrentPrice from "./CurrentPrice";
import Graph from "./Graph";
import DetailData from "./Data";

export interface IDetailChart {
  data?: any;
}

const Card = styled.div<{}>`
  border: 1px solid #8080804d;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
`;

const Wrapper = styled.div<{}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px 0;
`;

const MenuWrapper = styled.div<{}>`
  display: flex;
  gap: 15px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Menu = styled.div<{ $active: boolean }>`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  height: fit-content;
  border-radius: 10px;
  padding: 5px 10px;
  text-align: center;
  justify-content: center;
  ${(props) => css`
    background: ${props.$active ? "#f47820" : "#8080804d"};
    color: ${props.$active ? "#fff" : "000"};
  `};
`;

const DetailChart: FC<IDetailChart> = (props) => {
  const [menu, setMenu] = useState("market");

  return (
    <Card>
      <Wrapper>
        <CurrentPrice data={props.data} />
        <MenuWrapper>
          {["ohlc", "market"].map((item) => (
            <Menu
              key={item}
              onClick={() => setMenu(item)}
              $active={menu === item}
            >
              {item.toUpperCase()}
            </Menu>
          ))}
        </MenuWrapper>
      </Wrapper>
      <Graph menu={menu} />
      <DetailData data={props.data} />
    </Card>
  );
};

export default DetailChart;
