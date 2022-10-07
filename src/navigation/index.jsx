import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../screens/Dashboard/index.jsx";
import Page404 from "../screens/Page404/index.jsx";

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard/12" replace />} />
      <Route path="/dashboard/:userId" element={<Dashboard />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
}

export default Navigation;
