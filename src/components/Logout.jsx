import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Logout = () => {
  const { logout } = useAuth0();
  return (
    <button
      className="top_link logout_button"
      onClick={() => {
        logout({ returnTo: window.location.origin });
      }}
    ></button>
  );
};
