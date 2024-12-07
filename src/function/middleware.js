import React from 'react';
import {Navigate} from 'react-router-dom';
import apiJson from "./axios";

async function getCheck() {
    const token = localStorage.getItem('token');
    const get = await apiJson.post("/users/check-token", {
        token: token
    })
    if (get?.data?.status !== true) {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        localStorage.removeItem('id');
        localStorage.removeItem("username")
        localStorage.removeItem("phone")
    }
}

const PrivateRoute = ({element, ...rest}) => {

    const token = localStorage.getItem('token');

    // Check if the user is authenticated
    const isAuthenticated = token;
    let status = true

    if (status) {
        getCheck()
        status = false
    }

    return isAuthenticated !== null ? <Navigate to="/"/> : element;

};

export default PrivateRoute;