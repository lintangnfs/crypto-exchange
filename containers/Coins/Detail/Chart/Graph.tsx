import React, { FC } from "react";
import styled from "styled-components";
import dynamic from "next/dynamic";

import Skeleton from "@/components/Skeleton";

const Button = dynamic(() => import("@/components/Button"), {
  ssr: false,
  loading: () => <Skeleton height="34.5px" width="97px" radius="8px" />,
});

const Wrapper = styled.div<{}>`
  position: relative;
`;

const ButtonWrapper = styled.div<{}>`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: space-between;
`;

export interface IGraph {
  data?: any;
}

const Graph: FC<IGraph> = (props) => {
  const { data } = props;

  const filterPeriod = [
    {
      value: "24h",
      label: "24 Hours",
    },
    {
      value: "1w",
      label: "1 Week",
    },
    {
      value: "1m",
      label: "1 Month",
    },
    {
      value: "1y",
      label: "1 Year",
    },
  ];

  return (
    <React.Fragment>
      <Wrapper>
        <ButtonWrapper>
          {filterPeriod.map((item, index) => (
            <Button
              key={item.value}
              onClick={() => console.log("uhuy")}
              width="100%"
            >
              {item.label}
            </Button>
          ))}
        </ButtonWrapper>
      </Wrapper>
    </React.Fragment>
  );
};

export default Graph;
