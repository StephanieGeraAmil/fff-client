import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export const Logout = () => {
    const { logout } = useAuth0();
    ///I should clear the chats on state when logout
    return <button className="logout_button"  onClick={() => logout({ returnTo: window.location.origin })}></button>
}
