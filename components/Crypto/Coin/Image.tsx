import React, { FC, useEffect, useState } from "react";
import Image from "next/image";

export interface ICoinImage {
  image?: string;
  width?: number;
  height?: number;
  name?: string;
}

const CoinImage: FC<ICoinImage> = (props) => {
  const { width, height, name } = props;
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
  }, [props.image]);

  return (
    <React.Fragment>
      <Image
        src={
          error
            ? `${process.env.NEXT_PUBLIC_HOST_IMAGE}?id=1PsGDYooNP8tQ8F5P8i7aSFtRHuXhzqoS`
            : props.image
        }
        onError={setError}
        alt={`coin-image-${name}`}
        height={height ?? 32}
        width={width ?? 32}
      />
    </React.Fragment>
  );
};

export default CoinImage;
