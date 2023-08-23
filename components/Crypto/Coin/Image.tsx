import React, { FC } from "react";
import Image from "next/image";

export interface ICoinImage {
  image?: string;
  width?: number;
  height?: number;
  name?: string;
}

const CoinImage: FC<ICoinImage> = (props) => {
  const { width, height, name } = props;

  return (
    <React.Fragment>
      <Image
        src={props.image}
        alt={`coin-image-${name}`}
        height={height ?? 32}
        width={width ?? 32}
      />
    </React.Fragment>
  );
};

export default CoinImage;
