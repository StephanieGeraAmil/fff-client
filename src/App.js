import "./styles/styles.css";
import React, { useEffect, useState } from "react";
import { NavRail } from "./components/NavRail";
import { MapSection } from "./components/map/MapSection";
import { SideBar } from "./components/SideBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { CircularProgress } from "@mui/material";


const App = () => {


  const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;
  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#121212",
      },
      secondary: {
        main: "#5402f1",
      },
      background: {
        default: "#3f3f3f",
      },
    },
  });

 

  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return <CircularProgress />;
      case Status.FAILURE:
        return <div>ERROR LOADING MAP</div>;
      case Status.SUCCESS:
        return (
          <>
            {" "}
            <SideBar />
            <MapSection />
          </>
        );
    }
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Wrapper
          apiKey={REACT_APP_GOOGLE_MAPS_API_KEY}
          render={render}
        ></Wrapper>

        <NavRail />
      </ThemeProvider>
    </div>
  );
};

export default App;
