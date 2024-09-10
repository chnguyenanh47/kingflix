import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const IsLogin = () => {
    const { userInfo } = useSelector((state) => state.userLogin);
    return userInfo?.token ? <Navigate to="/profile" /> : <Outlet />;
};
export { IsLogin };