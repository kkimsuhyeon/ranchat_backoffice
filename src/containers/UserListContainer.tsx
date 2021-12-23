import React from "react";
import styled from "styled-components";

import useCustomQuery, { QUERY } from "hooks/useCustomQuery";

import { QUERY_REQUEST_USER_LIST, UserType } from "graphql/user";

import UserListTable from "components/user/UserListTable";

export interface UserListContainerProps {
  onClickButton: () => void;
  onClickList: (id: string) => void;
}

function UserListContainer({
  onClickButton,
  onClickList,
}: UserListContainerProps) {
  const { data } = useCustomQuery<
    void,
    { users: Array<UserType> },
    typeof QUERY
  >({
    type: QUERY,
    query: QUERY_REQUEST_USER_LIST,
  });

  return (
    <Wrapper>
      <UserListTable data={data?.users} onClickList={onClickList} />
      <Button onClick={onClickButton}>생성</Button>
    </Wrapper>
  );
}

export default UserListContainer;

const Wrapper = styled.section``;

const Button = styled.button`
  width: 8rem;
  height: 2.5rem;
  margin: 2rem 0 0 auto;
  display: block;
`;
