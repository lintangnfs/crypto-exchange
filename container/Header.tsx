import React from "react";
import Image from "next/image";

const Header = (props) => {
  return (
    <header>
      <div className="header-content">
        <div className="header-logo">
          <div className="header-logo-img">
            <Image
              src={`${process.env.NEXT_PUBLIC_HOST_IMAGE}?id=1PsGDYooNP8tQ8F5P8i7aSFtRHuXhzqoS`}
              alt="Crypto Exchange"
              width={30}
              height={30}
            />
          </div>
          <h2 className="header-title">Crypto Exchange</h2>
        </div>
        <div className="header-action"></div>
      </div>
      <style jsx>
        {`
          .header-content {
            width: 100%;
            display: flex;
            justify-content: space-between;
            padding: 0 20px;
          }
          .header-logo,
          .header-action {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: auto 0;
          }
          .header-title {
            color: #00355f;
            margin: 0;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
