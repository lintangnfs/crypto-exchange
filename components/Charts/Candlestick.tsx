import React, { FC } from "react";
import styled from "styled-components";

import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export interface ICandlestick {
  children?: React.ReactNode;
  title?: string | React.ReactNode;
  data?: any;
  days?: string;
  isDaysCounting?: boolean;
}

const Wrapper = styled.div<{}>`
  border-radius: 0.5rem;
`;

const Candlestick: FC<ICandlestick> = (props) => {
  const { data } = props;

  const dataPoints = data?.map((item, index) => {
    const axisY = item;
    axisY.shift();
    const today = new Date();
    const minutes = 30 * (data?.length - (index + 1));
    const hour = 4 * (data?.length - (index + 1));
    const date =
      props.days === "1"
        ? today.setMinutes(today.getMinutes() - minutes)
        : today.setHours(today.getHours() - hour);

    return {
      x: props.isDaysCounting ? new Date(date) : new Date(item[0]),
      y: props.isDaysCounting ? item : axisY,
    };
  });

  const options: any = {
    theme: "light2",
    animationEnabled: true,
    axisX: {
      title: "",
      valueFormatString: props.isDaysCounting
        ? "hh:mm tt"
        : "DD MMMM YYYY hh:mm",
      tickLength: 0,
      lineThickness: 0,
      gridThickness: 0,
      labelFormatter: function (e) {
        return "";
      },
    },
    axisY: {
      title: "",
      tickLength: 0,
      lineThickness: 0,
      gridThickness: 0,
      labelFormatter: function (e) {
        return "";
      },
    },
    data: [
      {
        color: "#e54040",
        risingColor: "#25a764",
        borderRisingColor: "#25a764",
        type: "candlestick",
        yValueFormatString: "###0.00",
        xValueFormatString: props.isDaysCounting
          ? "hh:mm tt"
          : "DD MMMM YYYY hh:mm",
        dataPoints: dataPoints ?? [],
      },
    ],
  };
  return (
    <React.Fragment>
      <Wrapper>
        <CanvasJSChart options={options} />
      </Wrapper>
    </React.Fragment>
  );
};

export default Candlestick;
