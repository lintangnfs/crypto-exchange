import React, { FC } from "react";
import dynamic from "next/dynamic";
import Button from "./Button";

const Image = dynamic(() => import("next/image"), {
  ssr: false,
});

const Layout = dynamic(() => import("@/containers/Layout"), {
  ssr: false,
});

export interface IErrorLayout {
  type?: string;
  title: string;
  image?: string;
  alt?: string;
  wording: string;
  buttonTitle?: string;
  buttonHandle(): void;
}

const ErrorLayout: FC<IErrorLayout> = (props) => {
  const { type, title, wording } = props;

  const ErrorContent = (
    <div className="error-content">
      {props.image && (
        <Image
          src={props.image}
          alt={props.alt ?? "Error Image"}
          height={300}
          width={300}
        />
      )}
      {type && <h1 className="error-type">{type}</h1>}
      {wording && <h3 className="error-wording">{wording}</h3>}
      <Button onClick={props.buttonHandle ?? null}>{props.buttonTitle}</Button>
      <style jsx>
        {`
          .error-content {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: right;
            flex-direction: column;
            height: 100vh;
          }
          .error-type {
            color: #00355f;
            font-size: 80px;
            margin: 0;
          }
          .error-wording {
            color: #00355f;
            margin: 10px 0 20px;
          }
        `}
      </style>
    </div>
  );

  return (
    <React.Fragment>
      <Layout title={title}>{ErrorContent}</Layout>
    </React.Fragment>
  );
};

export default ErrorLayout;
