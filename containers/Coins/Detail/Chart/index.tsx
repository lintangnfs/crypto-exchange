import React, { FC } from "react";
import Card from "@/components/Card";
import CurrentPrice from "./CurrentPrice";
import Graph from "./Graph";

export interface IDetailChart {
  data?: any;
  dataPoints?: any;
}

const DetailChart: FC<IDetailChart> = (props) => {
  return (
    <Card>
      <CurrentPrice data={props.data} />
      <Graph data={props.dataPoints} />
    </Card>
  );
};

export default DetailChart;
