import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import UserListContainer from "containers/UserListContainer";

function UserList() {
  const navigate = useNavigate();

  const toRegist = useCallback(() => {
    navigate("/user/regist");
  }, [navigate]);

  const toDetail = useCallback(
    (id: string) => {
      navigate(`/user/${id}`);
    },
    [navigate]
  );

  return <UserListContainer onClickButton={toRegist} onClickList={toDetail} />;
}

export default UserList;
