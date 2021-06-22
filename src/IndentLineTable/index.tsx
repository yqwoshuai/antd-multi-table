import React, { useState } from "react";
import { Table } from "antd";
import LineIndentCell from "./LineIndentCell";
import { nomolizeData, nomolizeColums } from "./utils";

export default function MultiTable(props) {
  const { dataSource, columns } = props;

  const [expandedRowKeys, setExpandedRowKeys] = useState([]);

  nomolizeData(dataSource);

  nomolizeColums(columns);

  const components = {
    body: {
      cell: (cellProps) => {
        return (
          <LineIndentCell
            {...props}
            {...cellProps}
            expandedRowKeys={expandedRowKeys}
          ></LineIndentCell>
        );
      },
    },
  };

  const changeExpande = (e) => {
    setExpandedRowKeys(e)
  }

  return (
    <div className="antd-multi-table">
      <Table
        components={components}
        dataSource={dataSource}
        columns={columns}
        expandable={{
          expandedRowKeys,
          onExpandedRowsChange: changeExpande,
        }}
      ></Table>
    </div>
  );
}
