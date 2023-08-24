import React, { FC } from "react";
import styled from "styled-components";

export interface ISubtitle {
  children: React.ReactNode;
}

const Text = styled.p<{}>`
  font-size: 14px;
  line-height: 20px;
  color: #80808080;
  margin: 0;
`;

const Subtitle: FC<ISubtitle> = (props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <Text>{children}</Text>
    </React.Fragment>
  );
};

export default Subtitle;
