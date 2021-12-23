import React from "react";

import Table, { TableProps } from "components/common/Table";

type User = {
  id: string;
  email: string;
  fullName: string;
  bio: "W" | "M" | undefined;
};

type UserTableProps = TableProps<User>;

const TABLE_STRUCTURE: UserTableProps["structure"] = [
  {
    id: "email",
    flex: "1",
    title: "이메일",
    align: "center",
  },
  {
    id: "fullName",
    flex: "1",
    title: "이름",
    align: "center",
  },
  {
    id: "bio",
    flex: "1",
    title: "성별",
    align: "center",
  },
];

export interface UserListTableProps {
  data?: UserTableProps["data"];
  onClickList: (id: string) => void;
}

function UserListTable({ data, onClickList }: UserListTableProps) {
  return (
    <Table
      structure={TABLE_STRUCTURE}
      data={data}
      onClick={({ id }) => onClickList(id)}
    />
  );
}

export default UserListTable;
