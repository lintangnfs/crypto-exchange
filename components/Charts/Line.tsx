import React, { FC } from "react";
import styled from "styled-components";

import { formatToCurrency } from "@/helpers/formatter";

import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export interface ILine {
  children?: React.ReactNode;
  title?: string | React.ReactNode;
  data?: any;
  days?: string;
  isDaysCounting?: boolean;
}

const Wrapper = styled.div<{}>`
  border-radius: 0.5rem;
`;

const Line: FC<ILine> = (props) => {
  const { data } = props;

  const dataPoints = data?.market_caps?.map((item, index) => {
    return {
      x: new Date(item[0]),
      y: item[1],
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
      lineThickness: 0,
      tickThickness: 0,
      labelFormatter: function (e) {
        return "";
      },
    },
    axisY: {
      title: "",
      tickLength: 0,
      lineThickness: 0,
      gridThickness: 0,
      margin: 0,
      labelFormatter: function (e) {
        return "";
      },
    },
    data: [
      {
        type: "line",
        dataPoints: dataPoints ?? [],
      },
    ],
  };
  return (
    <React.Fragment>
      <Wrapper>
        <CanvasJSChart options={options} onRef={(ref) => console.log("oke")} />
      </Wrapper>
    </React.Fragment>
  );
};

export default Line;
