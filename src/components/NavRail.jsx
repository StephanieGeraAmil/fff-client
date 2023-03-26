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
const handleSearchIconClick=(e)=>{
   dispatch(setForm({ type: "Search" }));
}
  return (
    <Box
        sx={{
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "background.default",
        width: '4%',
        minWidth:50,
        maxWidth:80,
        height: 1,
        margin: "auto",
        zIndex: 1500,
        display: "flex",
        flexDirection: "column",
      }}
      className="rail"
      role="presentation"
    >
      {!isAuthenticated && <Login />}
      {isAuthenticated && <Logout />}
      <IconButton
        aria-label="search"
        onClick={handleSearchIconClick}
      >
        <SearchOutlined />
      </IconButton>
    </Box>
  );
};
