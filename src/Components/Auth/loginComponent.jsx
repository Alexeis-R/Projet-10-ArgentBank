import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../Slices/authSlice";

const LoginComponent = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(
      login({
        user: { name: "" },
        token: "",
      })
    );
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default LoginComponent;
