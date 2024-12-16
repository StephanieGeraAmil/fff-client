import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "@mui/material";

export const LoginButton = ({ text }) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      onClick={(e) => {
        loginWithRedirect();
      }}
      sx={{
        // mt: "2%",
        width: { sm: "15vw" },
        height: { sm: "auto" },
        fontSize: { xs: "1em", sm: "1.7rem" },
        // backgroundColor: "#6d6c6c",

        backgroundColor: "#2B2D42",
        // color: "#fff",
        color: "#F8F8F8",
        // borderRadius: {xs:"4vw",sm:"2vw"},
        borderRadius: "30px",
        textTransform: "none",
        // fontFamily: "PT Sans, sans-serif",
      }}
      variant="contained"
    >
      {text}
    </Button>
  );
};
