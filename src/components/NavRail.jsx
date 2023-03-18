import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

import { setUser, setForm } from "../actions/globalStateActions.js";
import { useAuth0 } from "@auth0/auth0-react";
import { Login } from "./0auth/Login";
import { Logout } from "./0auth/Logout";
import { Box, IconButton } from "@mui/material/";
import { SearchOutlined } from "@mui/icons-material";

export const NavRail = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const dispatch = useDispatch();
  const userLogged = useSelector((state) =>
    state.current.user ? state.current.user : null
  );

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      if (!userLogged) {
        dispatch(setUser(user));
      }
    }
  }, [user]);

  return (
    <Box
      sx={{
        position: "absolute",
        top: "0",
        left: "0",
        backgroundColor: "background.default",
        width: "35",
        height: "100%",
        margin: "auto",
        zIndex: "20",
        display: "flex",
        flexDirection: "column",
      }}
      role="presentation"
    >
      {!isAuthenticated && <Login />}
      {isAuthenticated && <Logout />}
      <IconButton
        aria-label="search"
        onClick={(e) => {
          dispatch(setForm({ type: "Search" }));
        }}
      >
        <SearchOutlined />
      </IconButton>
    </Box>
  );
};
