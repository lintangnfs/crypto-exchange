import React, { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CoinOverview from "./Crypto/Coin/Overview";
import Card from "./Card";

export interface ISliderComponent {
  data: any;
  onClick?: (value: any) => void;
}

const Wrapper = styled.div<{}>`
  width: 100%;
  position: relative;
`;

const Container = styled.div<{}>`
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    width: 100%;
    overflow: auto;
  }
`;

const Slider = styled.div<{}>`
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  scroll-behavior: smooth;
  scroll-snap-type: x var(--tw-scroll-snap-strictness);
  --tw-scroll-snap-strictness: mandatory;
  touch-action: pan-x;
  z-index: 0;
  hieght: 100%;
  @media only screen and (max-width: 768px) {
    width: max-content;
    overflow: auto;
  }
`;

const SliderItem = styled.div<{}>`
  min-width: 220px;
  width: fit-content;
  min-height: 180px;
  height: fit-content;
  scroll-snap-align: start;
  cursor: pointer;
  @media only screen and (max-width: 1250px) {
    min-width: 200px;
    overflow: auto;
  }
  @media only screen and (max-width: 768px) {
    min-width: 180px;
    width: fit-content;
    min-height: 180px;
    height: fit-content;
  }
`;

const Arrow = styled.div<{}>`
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: space-between;
  height: 100%;
  top: 30%;
  visibility: hidden;
  @media only screen and (max-width: 1100px) {
    visibility: visible;
  }
  @media only screen and (max-width: 768px) {
    visibility: hidden;
  }
`;

const Button = styled.button<{}>`
  margin: 0;
  padding: 0;
  z-index: 11;
  width: 40px;
  height: 40px;
  opacity: 0.75;
  border: none;
  background: #f47820;
  border-radius: 50px;
  background: transparant;
  transition-property: all;
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  color: white;
  &:disabled {
    cursor: not-allowed;
    visibility: hidden;
  }
`;

const ButtonLeft = styled(Button)`
  margin-left: -1.5rem;
`;
const ButtonRight = styled(Button)`
  margin-right: -1.5rem;
`;

const SliderComponent: FC<ISliderComponent> = (props) => {
  const maxScrollWidth = useRef(0);
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data } = props;

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      sliderRef.current !== null &&
      sliderRef.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && sliderRef.current !== null) {
      return (
        sliderRef.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (sliderRef?.current !== null) {
      sliderRef.current.scrollLeft =
        sliderRef.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = sliderRef.current
      ? sliderRef.current.scrollWidth - sliderRef.current.offsetWidth
      : 0;
  }, []);

  return (
    <React.Fragment>
      <Wrapper>
        <Arrow className="mini-hide">
          <ButtonLeft onClick={() => movePrev()} disabled={isDisabled("prev")}>
            ◀
          </ButtonLeft>
          <ButtonRight onClick={() => moveNext()} disabled={isDisabled("next")}>
            ▶
          </ButtonRight>
        </Arrow>
        <Container>
          <Slider ref={sliderRef}>
            {data?.map((item: any, index: number) => (
              <SliderItem key={item.name + String(index)}>
                <Card>
                  <div onClick={() => props.onClick(item)}>
                    <CoinOverview
                      price={item.current_price}
                      image={item.image}
                      code={item.symbol?.toUpperCase()}
                      dataChange={item.price_change_percentage_24h}
                    />
                  </div>
                </Card>
              </SliderItem>
            ))}
          </Slider>
        </Container>
      </Wrapper>
    </React.Fragment>
  );
};

export default SliderComponent;
