import React from "react";
import styled from "styled-components";

const TableData = styled.td`
  background: #ffffff;
  padding: 8px;
  text-align: left;
  vertical-align: middle;
  font-weight: 300;
  font-size: 16px;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #c1c3d1;
  &:first-child {
    border-bottom-left-radius: 3px;
  }

  &:last-child {
    border-bottom-right-radius: 3px;
  }
`;
const TableRow = styled.tr`
  border-top: 1px solid #c1c3d1;
  border-bottom-: 1px solid #c1c3d1;
  color: #666b85;
  font-size: 16px;
  font-weight: normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
  &:first-child {
    border-top: none;
  }
  &:last-child {
    border-bottom: none;
  }
  &:last-child {
    border-bottom-left-radius: 3px;
  }

  &:last-child {
    border-bottom-right-radius: 3px;
  }
`;

function StageRow({ bandName, members, time }) {
  return (
    <>
      <TableRow>
        <TableData rowSpan={members.length}>{bandName}</TableData>
        <TableData>{members[0]}</TableData>
        <TableData rowSpan={members.length}>{time}</TableData>
      </TableRow>
      {members.map((name, index) => {
        if (index !== 0) {
          return (
            <TableRow id={index}>
              <TableData>{name}</TableData>
            </TableRow>
          );
        } else return null;
      })}
    </>
  );
}

export default StageRow;
