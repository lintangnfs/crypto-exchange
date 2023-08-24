import React, { FC } from "react";
import Card from "@/components/Card";

export interface IDetailInfo {
  data?: any;
}

const DetailInfo: FC<IDetailInfo> = (props) => {
  const { data } = props;

  return (
    <Card title={`About ${data?.name ?? ""}`}>
      <div
        style={{ textAlign: "justify" }}
        dangerouslySetInnerHTML={{ __html: data?.description?.en }}
      />
    </Card>
  );
};

export default DetailInfo;
