import "./styles/styles.css";
import React from "react";
import { NavRail } from "./components/NavRail";
import { MapSection } from "./components/map/MapSection";
import { SideBar } from "./components/SideBar";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Box, IconButton, CircularProgress } from "@mui/material";




const App = () => {
  const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;
  let theme = createTheme({
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
    typography: {
      fontSize: 15,
    },
    // components: {
    //   MuiBox: {
    //     styleOverrides: {
    //       root: {
    //         padding: 0, // Set padding to 0 globally for all Box components
    //       },
    //     },
    //   },
    // },
  });
  theme = responsiveFontSizes(theme);

  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return (
          <>
            <CircularProgress color="inherit" />
          </>
        );
      case Status.FAILURE:
        return <div>ERROR LOADING MAP</div>;
      case Status.SUCCESS:
        return (
          <>
            <SideBar />
            <MapSection />
          </>
        );
      default:
        return;
    }
  };
  return (
    <Box
      sx={{

        backgroundColor: "background.default",
        width: 1,

        height: 1,
        margin: 0,
        zIndex: -10,

      }}

    >
      <ThemeProvider theme={theme}>
        <Wrapper
          apiKey={REACT_APP_GOOGLE_MAPS_API_KEY}
          render={render}
        ></Wrapper>

        <NavRail />
      </ThemeProvider>
    </Box>
  );
};

export default App;
