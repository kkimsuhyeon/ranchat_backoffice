import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import UserList from "./UserList";

function Root() {
  return (
    <Routes>
      <Route path="/user" element={<UserList />} />
      <Route path="*" element={<Navigate to="/user" replace />} />
    </Routes>
  );
}

export default Root;
