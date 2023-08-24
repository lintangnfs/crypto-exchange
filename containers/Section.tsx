import React from "react";
interface ISection {
  children: React.ReactNode;
  title?: string | React.ReactNode;
  subtitle?: string;
}

const Section = ({ title, subtitle, children }: ISection) => {
  return (
    <section>
      <div className="section">
        <div className="section-title">
          <h3>{title}</h3>
          {subtitle && <p>{subtitle}</p>}
        </div>
        <div className="section-content">{children}</div>
      </div>
      <style jsx>
        {`
          .section {
            width: inherit;
            padding: 40px 5%;
          }
          .section-title h3 {
            color: #00355f;
            margin: 0;
            font-weight: 500;
            font-size: 28px;
          }
          .section-title p {
            font-weight: 400;
            font-size: 14px;
            color: #808080;
            margin: 8px 0;
          }
          .section-content {
            margin: 30px 0 20px;
          }
        `}
      </style>
    </section>
  );
};

export default Section;
