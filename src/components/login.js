import { useAuth0 } from "@auth0/auth0-react";
import React from 'react'

export const Login = () => {
    const { loginWithRedirect } = useAuth0();
    return <button className="login_button" onClick={() => loginWithRedirect()}></button>;
}
