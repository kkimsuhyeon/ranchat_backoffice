import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

import UserList from "./UserList";
import UserRegist from "./UserRegist";

function Root() {
  return (
    <Routes>
      <Route path="/user/*" element={<Outlet />}>
        <Route path="" element={<UserList />} />
        <Route path="regist" element={<UserRegist />} />
        <Route path=":id" element={<div>detail</div>} />
      </Route>
      <Route path="*" element={<Navigate to="/user" replace />} />
    </Routes>
  );
}

export default Root;
