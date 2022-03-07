import { useAuth0 } from "@auth0/auth0-react";
import React from 'react'
import { useDispatch } from 'react-redux';



export const Login = () => {
    const {loginWithRedirect } = useAuth0();
    const dispatch= useDispatch();

   
    return <button className="login_button" onClick={() =>loginWithRedirect()}></button>;
}
