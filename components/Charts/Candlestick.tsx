import React, { FC } from "react";
import styled from "styled-components";

import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export interface ICandlestick {
  children?: React.ReactNode;
  title?: string | React.ReactNode;
  dataPoints?: any;
}

const Wrapper = styled.div<{}>`
  border: 1px solid #8080804d;
  border-radius: 0.5rem;
  padding: 24px;
  margin-bottom: 2rem;
`;

const Candlestick: FC<ICandlestick> = (props) => {
  const options: any = {
    theme: "light2", // "light1", "light2", "dark1", "dark2"
    animationEnabled: true,
    exportEnabled: true,
    axisX: {
      valueFormatString: "MMM",
    },
    axisY: {
      prefix: "$",
      title: "Price (in USD)",
    },
    data: [
      {
        color: ["#e54040"],
        type: "candlestick",
        showInLegend: true,
        yValueFormatString: "$###0.00",
        xValueFormatString: "MMMM YY",
        dataPoints: props?.dataPoints ?? [
          { x: new Date("2017-01-01"), y: [36.61, 38.45, 36.19, 36.82] },
          { x: new Date("2017-02-01"), y: [36.82, 36.95, 34.84, 36.2] },
          { x: new Date("2017-03-01"), y: [35.85, 36.3, 34.66, 36.07] },
          { x: new Date("2017-04-01"), y: [36.19, 37.5, 35.21, 36.15] },
          { x: new Date("2017-05-01"), y: [36.11, 37.17, 35.02, 36.11] },
          { x: new Date("2017-06-01"), y: [36.12, 36.57, 33.34, 33.74] },
          { x: new Date("2017-07-01"), y: [33.51, 35.86, 33.23, 35.47] },
          { x: new Date("2017-08-01"), y: [35.66, 36.7, 34.38, 35.07] },
          { x: new Date("2017-09-01"), y: [35.24, 38.15, 34.93, 38.08] },
          { x: new Date("2017-10-01"), y: [38.12, 45.8, 38.08, 45.49] },
          { x: new Date("2017-11-01"), y: [45.97, 47.3, 43.77, 44.84] },
          { x: new Date("2017-12-01"), y: [44.73, 47.64, 42.67, 46.16] },
        ],
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

export default Candlestick;
