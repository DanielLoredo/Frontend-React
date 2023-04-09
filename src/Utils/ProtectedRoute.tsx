import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface protectedRouteType {
  isAllowed: boolean;
  children?: ReactElement;
  redirectTo?: string;
}

export const ProtectedRouter = ({
  isAllowed,
  children,
  redirectTo = "/login",
}: protectedRouteType) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }

  return children ? children : <Outlet />;
};
