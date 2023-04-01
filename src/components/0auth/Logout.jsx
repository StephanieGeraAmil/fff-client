import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material/";
const { REDIRECT_URI } = process.env;
export const Logout = () => {
  const { logout } = useAuth0();
  return (
    <IconButton
      aria-label="logout"
      onClick={(e) => {
        logout({ returnTo: window.location.origin });
      }}
    >
      <LogoutOutlined />
    </IconButton>
  );
};
