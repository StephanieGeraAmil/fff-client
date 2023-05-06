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
        width:{ sm:'15vw'}, 
        height: { sm:'4vw'}, 
        fontSize: {xs: '0.7rem',sm: "1.5vw"},
        backgroundColor:"#6d6c6c",
        color:"#fff",
        borderRadius: {xs:"4vw",sm:"2vw"}, 
        fontFamily: 'PT Sans, sans-serif',
      }}
      variant="contained"
    >
     {text}
    </Button>
  );
};
