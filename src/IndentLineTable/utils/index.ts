import { LEVEL_KEY, PARENT_NODE_KEY } from "./constants";

export const nomolizeData = (dataSource) => {
  const nomolize = (list, parent = null, level = 1) => {
    list.forEach((item) => {
      item[LEVEL_KEY] = level;
      item[PARENT_NODE_KEY] = parent;
      if (Array.isArray(item.children)) {
        nomolize(item.children, item, level + 1);
      }
    });
  };
  nomolize(dataSource);
};

export const nomolizeColums = (columns) => {
  columns.forEach((column) => {
    column.onCell = (record) => {
      return {
        record,
        ...column,
      };
    };
  });
};
