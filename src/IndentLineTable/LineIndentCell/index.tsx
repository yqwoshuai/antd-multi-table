import React, { useMemo } from "react";
import { LEVEL_KEY } from "../utils/constants";

export default function LineIndentCell(props) {
  const { className, children, record, dataIndex, columns } = props;

  if (dataIndex !== columns[0].dataIndex) {
    return (
      <td className={className}>
        <div className="antd-multi-table-cell-content">{children}</div>
      </td>
    );
  }

  const level = record[LEVEL_KEY];
  const shouldIntent = useMemo(() => {
    const indentDivsLeft = [];
    for (let i = 1; i < level; i++) {
      indentDivsLeft.push(i * 24);
    }
    return indentDivsLeft.map((left) => {
      return (
        <div
          style={{
            position: "absolute",
            left: left,
            top: 0,
            bottom: 0,
            width: 1,
            height: "100%",
            backgroundColor: "#e8e8e8",
          }}
          key={left}
        ></div>
      );
    });
  }, [level]);

  return (
    <td className={`${className} antd-mutli-table-cell`}>
      {shouldIntent}
      <div className="antd-mutli-table-cell-content">{children}</div>
    </td>
  );
}
