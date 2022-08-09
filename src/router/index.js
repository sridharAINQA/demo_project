import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoutes } from "./routes";
import PrivateRouter from "./privateRouter";

import { NotFound, Home, Login, EmployeeTaskList, EmployeeTaskAddEdit } from "./../screens";

const RouterApp = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Route */}
        <Route
          path={AppRoutes.home}
          element={
            <PrivateRouter path={AppRoutes.home}>
              <Home />
            </PrivateRouter>
          }
        />

        {/* Employee - Task List */}
        <Route
          path={AppRoutes.employeeTaskList}
          element={
            <PrivateRouter path={AppRoutes.employeeTaskList}>
              <EmployeeTaskList />
            </PrivateRouter>
          }
        />

        {/* Employee - Task Add */}
        <Route
          path={AppRoutes.employeeTaskAddEdit}
          element={
            <PrivateRouter path={AppRoutes.employeeTaskAddEdit}>
              <EmployeeTaskAddEdit />
            </PrivateRouter>
          }
        />

        {/* Login Route */}
        <Route path={AppRoutes.login} element={<Login />} />

        {/* For unknow/non-defined path */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
