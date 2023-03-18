import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import {LoginOutlined } from '@mui/icons-material';
import { IconButton } from "@mui/material/";

export const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (

      <IconButton
      aria-label="logout"
      onClick={(e) => {
        loginWithRedirect();
      }}
    >
      <LoginOutlined />
    </IconButton>
  );
};
