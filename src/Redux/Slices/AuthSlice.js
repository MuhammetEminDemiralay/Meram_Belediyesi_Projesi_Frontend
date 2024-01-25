import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { isExpired, decodeToken } from "react-jwt";
import {
    getToken,
    removeToken,
    saveToken,
} from "../../Helper/localStorageHepler";

export const login = createAsyncThunk("auth/login", async (user) => {
    const response = await fetch('https://localhost:44358/api/Auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user),
    })
    const datas = await response.json();
    return datas.data
});


export const register = createAsyncThunk("auth/register", async (user)=> {
    const response = await fetch('https://localhost:44358/api/Auth/register', {
        method : 'POST',
        headers : {'Content-Type' : 'Application/json'},
        body : JSON.stringify(user),
    })
    console.log(response);
    const datas = await response.json()
    console.log(datas);
    return datas.data 
});



    export const getUser = (token) => {
        const decodedToken = decodeToken(token);
        let user = {};
        const tokenFeatures = {
            id: "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier",
            email: "email",
            name: "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name",
            role: "http://schemas.microsoft.com/ws/2008/06/identity/claims/role",
        };
        Object.keys(tokenFeatures).forEach((feat) => {
            user = {
                ...user,
                [feat]: decodedToken[tokenFeatures[feat]],
            };
        });
        return user;
    };

    export const loggedIn = () => {
        if (getToken()) {
            return !isExpired(getToken());
        }
        return false;
    };

    export const isAdmin = (user) => {
        const isLoggedIn = loggedIn();
        if (!isLoggedIn || !user.roles) {
            return false;
        }
        const claims = user.roles.split(",");
        return claims.map((claim) => claim.toLowerCase()).includes("admin");
    };
    
    export const authSlice = createSlice({
        name: "auth",
        initialState: {
            currentUser: {},
            isAuth: false,
            isAdmin: false,
            errorMessage : ""
        },
        reducers: {
            logout: (state) => {
                removeToken();
                state.isAuth = false;
            },
            checkToken: (state, action) => {
                const token = action.payload;
                if (!token) {
                    state.currentUser = {};
                    state.isAuth = false;
                    state.isAdmin = false;
                    
                    return;
                }
                const loggedInUser = getUser(token);
                state.currentUser = loggedInUser;
                state.isAuth = true;
                state.isAdmin = isAdmin(loggedInUser);
            },
        },
        extraReducers: (builder) => {
            builder.
                addCase(login.fulfilled, (state, action) => {
                    const currentToken = action.payload.token;
                    saveToken(currentToken);
                    state.isAuth = true;
                })
        },
    });

    // export const {actions: authActions} = authSlice

    export const { logout, checkToken } = authSlice.actions;

    export default authSlice.reducer;