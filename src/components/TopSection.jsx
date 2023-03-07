import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

import { setUser } from "../actions/globalStateActions.js";
import { useAuth0 } from "@auth0/auth0-react";
import { Login } from "./Login";
import { Logout } from "./Logout";

export const TopSection = () => {
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
    <>
      {!isAuthenticated && <Login />}
      {isAuthenticated && (
        <div className="top_section">
          <Logout />
        </div>
      )}
    </>
  );
};
