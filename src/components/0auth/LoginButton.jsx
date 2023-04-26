import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "@mui/material";

export const LoginButton = ({text}) => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      onClick={(e) => {
        loginWithRedirect();
      }}
      sx={{
        mt: "4%",
        width: "max(15vw,140px)",
        height: "max(4vw,30px)",
        fontSize: "max(1vw,0.7rem)",
        backgroundColor: "#0E0A05",
        borderRadius: "max(1vw,10px)",
        minWidth: "85px",
      }}
      variant="contained"
    >
     {text}
    </Button>
  );
};
