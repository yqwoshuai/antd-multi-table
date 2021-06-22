import React, { useState } from "react";
import MultiTable from "../index";

const dataSource = [
  {
    key: "1",
    name: "123",
    age: 32,
    children: [
      {
        key: "2",
        age: 32,
        name: "123",
        children: [
          {
            key: "4",
            age: 32,
            name: "123",
          },
          {
            key: "5",
            age: 32,
            name: "123",
          },
        ],
      },
      {
        key: "3",
        age: 32,
        name: "123",
      },
    ],
  },
];

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
  },
];

export default function IndentLineTableDemo() {
  return <MultiTable dataSource={dataSource} columns={columns}></MultiTable>;
}
