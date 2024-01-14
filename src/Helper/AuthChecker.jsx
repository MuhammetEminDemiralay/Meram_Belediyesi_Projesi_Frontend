import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getToken } from "./localStorageHepler";
import { checkToken } from "../Redux/Slices/AuthSlice";
checkToken

const AuthChecker = ({ children }) => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);

  useEffect(() => {
    const savedToken = getToken();
    dispatch(checkToken(savedToken));
  }, [isAuth, dispatch]);

  return <div>{children}</div>;
};

export default AuthChecker