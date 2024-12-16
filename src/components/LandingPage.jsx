import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Grid, Typography, Container } from "@mui/material";
import { LoginButton } from "./0auth/LoginButton";
import { red } from "@mui/material/colors";

const advantages = [
  {
    img: "/mental-health.svg",
    text: "Enhance Mental Health and Overall Well-Being",
  },
  // {
  //   img: "/hourglass.png",
  //   text: "Boost Longevity",
  // },
  {
    img: "/help.svg",
    text: "Receive Emotional Support, Encouragement, and Accountability",
  },
  {
    img: "/jigsaw.svg",
    text: "Benefit from Opportunities to Collaborate and Learn",
  },
];
const steps = [
  {
    step: 1,
    subtitle: "Signup with Confidence",
    text: "No spam, guaranteed: We only ask for your gender and age to better tailor events to you.",
  },
  {
    step: 2,
    subtitle: "Explore Local Events",
    text: "Find nearby events designed to foster real-life connections.",
  },
  {
    step: 3,
    subtitle: "Engage and Participate",
    text: "Join activities and meet like-minded people in your community.",
  },
  {
    step: 4,
    subtitle: "Create and Share Events",
    text: "Have a great idea? Start your own event! Don’t worry about attendance, every connection matters.",
  },
];
const LandingPage = () => {
  // const [currentStep, setCurrentStep] = useState(0);

  // // Auto-cycle advantages every 4 seconds
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentStep((prev) => (prev + 1) % advantages.length);
  //   }, 4000);
  //   return () => clearInterval(intervalId);
  // }, []);
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty(
        "--scrollY",
        `${window.scrollY}px`
      );
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Grid
      container
      item
      sx={{
        // backgroundColor: "#fff",
        backgroundColor: "#F8F8F8",
        // color: "#626161",
        color: "#4A4A4A",
        // fontFamily: "Montserrat, sans-serif",
        fontFamily: "Funnel Display",
      }}
      spacing={{ sx: 5, sm: 1 }}
      direction="column"
    >
      <Grid container item spacing={{ sx: 0, sm: 0 }}>
        <Grid
          container
          item
          xs={12}
          xl={9}
          direction="row"
          height="60vh"
          sx={{
            mx: { xs: "0", sm: "0" },
          }}
        >
          <div className="topSection" height={"auto"}>
            {/* <img src="/sadGirl.png" className="alone" /> */}
            <video
              className="alone"
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", height: "auto" }}
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </Grid>

        <Grid container item xs={12}>
          <Grid
            spacing={{ xs: 0, sm: 0 }}
            columns={{ xs: 12, sm: 6 }}
            container
            item
            sx={{
              zIndex: "2",
              m: { xs: "0", sm: "0" },
              // py: { xs: "2em", sm: "3.5%" },
              px: { xs: "2em", sm: "5%" },

              // backgroundColor: "#D4D4D4",
              backgroundColor: "#B8D8E4",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
            }}
          >
            <Grid container item xs={12} lg={6}>
              <Box
                sx={{
                  m: { xs: "0", sm: "0" },
                  p: "0",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "3rem", sm: "6rem" },
                    fontFamily: "Funnel Display",
                    color: "#2B2D42",
                  }}
                >
                  Fighting Loneliness
                </Typography>
                {/* <Typography
                  variant="p"
                  sx={{
                    fontWeight: 300,
                    fontSize: {
                      xs: "1rem",
                      sm: "1.4rem",
                    },
                    my: "2vh",
                    color: "#2B2D42",
                  }}
                >
                  Together, we thrive. By building connections rooted in
                  kindness and shared purpose, we create a stronger, more
                  supportive world where everyone belongs.
                </Typography>
                <LoginButton text="Start now" /> */}
              </Box>
            </Grid>
            <Grid container item xs={12} lg={6}>
              <Box
                sx={{
                  m: { xs: "0", sm: "0" },
                  p: "0",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: 300,
                    fontSize: {
                      xs: "1rem",
                      sm: "1.7rem",
                    },
                    fontFamily: "Funnel Display",
                    my: "2vh",
                    color: "#2B2D42",
                  }}
                >
                  Together, we thrive. By building connections rooted in
                  kindness and shared purpose, we create a stronger, more
                  supportive world where everyone belongs.
                </Typography>
                <LoginButton text="Start now" />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        item
        direction="row"
        width="100%"
        sx={{
          // p: 2,
          // px: { xs: "2em", sm: "5%" },
          p: "0",
          m: "0",
        }}
      >
        {/* <Grid
          container
          item
          direction="column"
          xs={12}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            mt: "6vh",
          }}
        >
          <Typography
            variant="h2"
            align="justify"
            sx={{ fontWeight: 300, fontSize: { xs: "2.5rem", sm: "3.7rem" } }}
          >
            Whow it works?
          </Typography>
        </Grid> */}
        <Grid
          container
          item
          xs={11}
          md={10}
          xl={9}
          sx={{
            m: "auto",
            my: "10vh",

            p: "0",
          }}
        >
          <Grid
            container
            rowSpacing={{ xs: 2, sm: 2 }}
            columnSpacing={{ xs: 0, sm: 2, lg: 4 }}
            columns={{ xs: 12, sm: 6, md: 3 }}
            item
          >
            {steps.map(({ step, subtitle, text }) => (
              <Grid container item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    // borderRadius: { xs: "4vw", sm: "2vw" },
                    p: { xs: "1rem" },
                    width: { xs: "100%", lg: "95%" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                  // backgroundColor="#fff"
                  backgroundColor="#F8F8F8"
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 900,
                      fontSize: { xs: "3.7rem" },
                      // fontFamily: "Montserrat, sans-serif",
                      fontFamily: "Funnel Display",
                      color: "#B8D8E4",
                    }}
                  >
                    {step}.
                  </Typography>
                  <Typography
                    variant="h5"
                    align="left"
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: "1.3rem", sm: "1.6rem" },
                      fontFamily: "Funnel Display",
                      mt: "1vh",
                      mb: "1vh",
                      color: "#2B2D42",
                    }}
                  >
                    {subtitle}
                  </Typography>
                  <Typography
                    variant="p"
                    align="left"
                    sx={{
                      fontWeight: 300,
                      // fontSize: {
                      //   xs: "1rem",
                      //   sm: "1.1rem",
                      // },
                      fontSize: {
                        xs: "1rem",
                        sm: "1.5rem",
                      },
                      // color: "#aaaaaa",
                    }}
                  >
                    {text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12}>
        <Grid
          spacing={{ xs: 0, sm: 0 }}
          columns={{ xs: 12 }}
          container
          item
          direction="row"
          justifyContent={"space-around"}
          alignContent={"center"}
          height={"50vh"}
          sx={{
            m: { xs: "0", sm: "0" },
            px: { xs: "0", sm: "10%" },
            width: "100%",
            // minHeight: "400px",
            // backgroundColor: "#D4D4D4",
            backgroundColor: "#B8D8E4",
          }}
        >
          {advantages.map((adv, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              container
              justifyContent="center"
              height={"30vh"}
              sx={{
                p: { xs: "0", sm: "0" },

                // height: "250px",
              }}
            >
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  minWidth: "350px",

                  m: "0",
                  mt: "10px",
                  pt: "30px",
                  // px: "10px",
                  py: "10px",
                  opacity: 1,
                  // border: "2px solid #fff",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                  // borderRadius: "8px",
                  borderRadius: "30px",
                  backgroundColor: "#2B2D42",
                }}
              >
                <img
                  src={advantages[index].img}
                  alt="Advantage"
                  className="advantages"
                  sx={{
                    // my: "10px",
                    color: "#F8F8F8",
                    // height: "20%",
                    // width: "20%",
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 300,
                    // fontSize: { xs: "1.1rem" },
                    fontSize: {
                      xs: "1rem",
                      sm: "1.3rem",
                    },
                    my: "25px",
                    width: "85%",
                    textAlign: "center",
                    fontFamily: "Funnel Display",
                    color: "#F8F8F8",
                  }}
                >
                  {advantages[index].text}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid
          spacing={{ xs: 0, sm: 0 }}
          columns={{ xs: 12, sm: 6 }}
          container
          item
          className="bottom_video"
          sx={{
            // margin: { xs: "0", sm: "0" },
            marginTop: "50px",
            px: { sm: "2em" },
          }}
        >
          <Grid container item xs={12} sm={12} md={12}>
            <Box
              sx={{
                width: "100%",
                m: "0",
                p: "0",
                height: "60vh",
                overflow: "hidden",
                position: "relative",
                // m: "auto",
                // p: "20px",
                // display: "flex",
                // flexDirection: "column",
                // justifyContent: "center",
              }}
            >
              {/* <div className="bottomImages">
                <img src="/friends.png" className="community" />{" "}
              </div> */}
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "auto",
                  zIndex: "1",
                  margin: "-120px 0 0 0",
                }}
              >
                <source src="/video3.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <Box
                sx={{
                  width: "40%",
                  p: "30px",
                  // mb: "-220px ",
                  position: "absolute",
                  bottom: "30px",
                  right: "30px",
                  height: "auto",

                  zIndex: "3",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  borderRadius: "30px",
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: 300,
                    // fontSize: {
                    //   xs: "1rem",
                    // },

                    fontSize: {
                      xs: "1rem",
                      sm: "1.7rem",
                    },
                    fontFamily: "Funnel Display",
                    color: "#F8F8F8",
                    // color: "#aaaaaa",
                  }}
                >
                  Live in harmony with each other. Don’t be too proud to enjoy
                  the company of ordinary people. And don’t think you know it
                  all.
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: 700,
                    // fontSize: {
                    //   xs: "0.9rem",
                    //   sm: "1rem",
                    // },
                    fontSize: {
                      xs: "1rem",
                      sm: "1.7rem",
                    },
                    width: "auto",
                    padding: "10px",
                    maxWidth: "50%",
                    color: "#F8F8F8",
                    fontFamily: "Funnel Display",
                  }}
                >
                  Romans 12:16
                </Typography>
              </Box>
            </Box>
          </Grid>
          {/* <Grid
            container
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              backgroundColor: "#fff",
            }}
          >
          
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
  );
};
export default LandingPage;
