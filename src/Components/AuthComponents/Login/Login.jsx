import React from "react";
import './Login.css'
import { useDispatch } from "react-redux";
import { login } from "../../../Redux/Slices/AuthSlice";
import { useNavigate } from "react-router-dom";




const Login = () => {
    const navi = useNavigate();
    const dispatch = useDispatch();
    const user = {
        email: "muhammet@gmail.com",
        password: "12345"
    }

    function handleLogin() {
        dispatch(login(user))
        navi("/")
    }

    return (
        <>
            <button onClick={handleLogin}>Login ol</button>
        </>
    )
};

export default Login;