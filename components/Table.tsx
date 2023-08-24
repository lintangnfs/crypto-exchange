import React, { FC } from "react";
import styled, { css } from "styled-components";

export interface ITable {
  columns?: {
    title: string;
    width?: number;
    className?: string;
    dataIndex: string;
    render?: (data?: any) => void;
  }[];
  data?: any;
  rowDataClick?: (data?: any) => void;
}

const TableWrapper = styled.table<{}>`
  width: 100%;
  border-collapse: collapse;
`;

const TR = styled.tr<{}>`
  border-bottom: solid 1px #8080804d;
`;

const THead = styled.thead<{}>``;

const TBody = styled.tbody<{}>``;

const TH = styled.th<{}>`
  min-width: 80px;
  color: #808080f2;
  text-align: left;
  padding: 10px 1.25rem;
  @media only screen and (max-width: 768px) {
    min-width: fit-content;
  }
`;

const TD = styled.td<{ $clickable: boolean }>`
  min-width: 80px;
  padding: 1.25rem;
  font-size: 16px;
  font-weight: 600;
  @media only screen and (max-width: 768px) {
    min-width: fit-content;
  }
  ${(props) =>
    props.$clickable &&
    css`
      cursor: pointer;
    `};
`;

const Table: FC<ITable> = (props) => {
  const handleClickRow = (data: any) => {
    if (props.rowDataClick) {
      props.rowDataClick(data);
    }

    return undefined;
  };

  return (
    <TableWrapper>
      <THead>
        <TR>
          {props.columns?.map((item, index) => (
            <TH
              key={`head-column-${item.title}-${String(index)}`}
              className={item.className ?? ""}
            >
              {item.title.toUpperCase()}
            </TH>
          ))}
        </TR>
      </THead>
      <TBody>
        {props.data?.map((item, idx) => (
          <TR key={`data-row-${item.id}-${String(idx)}`}>
            {props.columns?.map((column, index) => (
              <TD
                key={`data-value-${column.dataIndex}-${String(index)}`}
                $clickable={!!props.rowDataClick}
                onClick={() => handleClickRow(item)}
                className={column.className ?? ""}
              >
                {column.render
                  ? column.render(item)
                  : item[`${column.dataIndex}`]}
              </TD>
            ))}
          </TR>
        ))}
      </TBody>
    </TableWrapper>
  );
};

export default Table;
