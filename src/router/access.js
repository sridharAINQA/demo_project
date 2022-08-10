import { AppRoutes } from "./routes";
import { UserRoles } from "../utils";

/**
 * The below function define redirection for a particular route based on the role
 */
export const Redirections = (userRole) => {
  switch (userRole) {
    default:
      return "";
  }
};

/**
 * The below function define redirection to a particular route based on the role
 */
export const LoginSuccess = (userRole) => {
  switch (userRole) {
    case UserRoles.manager:
      return AppRoutes.taskLogs;
    case UserRoles.employee:
      return AppRoutes.employeeTaskList;
    default:
      return "/";
  }
};

export const ManagerRoutes = {
  taskLogs: AppRoutes.taskLogs,
};

export const EmployeeRoutes = {
  employeeTaskList: AppRoutes.employeeTaskList,
  employeeTaskAddEdit: AppRoutes.employeeTaskAddEdit,
};

/**
 * The below function define number of routes that can accessible by the
 * different role.
 */
export const Access = (userRole, path) => {
  switch (userRole) {
    case UserRoles.manager:
      return [...Object.values(ManagerRoutes)].indexOf(path);
    case UserRoles.employee:
      return [...Object.values(EmployeeRoutes)].indexOf(path);
    default:
      return false;
  }
};
