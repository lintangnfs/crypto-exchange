import React, { FC } from "react";
import styled from "styled-components";

export interface ICard {
  children?: React.ReactNode;
  title?: string | React.ReactNode;
}

const Wrapper = styled.div<{}>`
  border: 1px solid #8080804d;
  border-radius: 0.5rem;
  padding: 24px;
  margin-bottom: 2rem;
`;

const Title = styled.div<{}>`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
`;

const Content = styled.div<{}>`
  color: rgba(11, 10, 10, var(--tw-text-opacity));
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

const Card: FC<ICard> = (props) => {
  return (
    <React.Fragment>
      <Wrapper>
        {props.title && <Title>{props.title}</Title>}
        <Content>{props.children}</Content>
      </Wrapper>
    </React.Fragment>
  );
};

export default Card;
