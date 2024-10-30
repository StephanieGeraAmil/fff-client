import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Grid, Typography, Container } from "@mui/material";
import { LoginButton } from "./0auth/LoginButton";
import { red } from "@mui/material/colors";

const advantages = [
  {
    img: '/mental-health.png',
    text: 'Enhance Mental Health and Overall Well-Being',
  },
  {
    img: '/hourglass.png',
    text: 'Boost Longevity',
  },
  {
    img: '/help.png',
    text: 'Receive Emotional Support, Encouragement, and Accountability',
  },
  {
    img: '/jigsaw.png',
    text: 'Benefit from Opportunities to Collaborate and Learn',
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
      document.documentElement.style.setProperty("--scrollY", `${window.scrollY}px`);
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
        backgroundColor: "#fff",
        color: "#626161",
        fontFamily: "Montserrat, sans-serif",
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
          height={"auto"}
          sx={{
            mx: { xs: "0", sm: "auto" },
          }}
        >
          <div className="topSection" height={"auto"}>
            <img src="/sadGirl.png" className="alone" />
        
          </div>
        </Grid>


        <Grid
          container
          item
          xs={12}



        >
          <Grid
            spacing={{ xs: 0, sm: 0 }}
            columns={{ xs: 12, sm: 6 }}
            container
            item
            sx={{
              m: { xs: "0", sm: "0" },
              py: { xs: "2em", sm: "3.5%" },
              px: { xs: "2em", sm: "7%" },
              backgroundColor: "#D4D4D4",

            }}
          >
            <Grid container item xs={12} md={7} lg={6}>
              <Box
                sx={{
                  zIndex: "2",
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
                    fontWeight: 900,
                    fontSize: { xs: "3rem", sm: "6rem" },
                  }}
                >
                  Fighting Loneliness
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: 300,
                    fontSize: {
                      xs: "1rem",
                      sm: "1.4rem",
                    },
                    my: "2vh",
                  }}
                >
                  Community is vital, by fostering generosity, gratitude, and support, we heal, grow, and participate in things grater than us.
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
        sx={{
          p: 2,

        }}
      >
        <Grid
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
      
        </Grid>
        <Grid
          container
          item
          xs={11}
          md={10}
          xl={9}
          sx={{
            mx: "auto",
            mt: "4vh",
            mb: "5vh",
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
                  borderRadius: { xs: "4vw", sm: "2vw" },
                  p: { xs: "1rem"},
                  width: { xs: "100%", lg: "95%" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",

                }}
                backgroundColor="#fff"
              >
                
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 900,
                    fontSize: { xs: "2.7rem" },
                    fontFamily: "Montserrat, sans-serif",
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
                    mt: "3vh",
                    mb: "3vh",
                  }}
                >
                  {subtitle}
                </Typography>
                <Typography
                  variant="p"
                  align="left"
                  sx={{
                    fontWeight: 300,
                    fontSize: {
                      xs: "1rem",
                      sm: "1.1rem",
                    },
                    color: "#aaaaaa",

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
      <Grid
        container
        item
        xs={12}
      >
        <Grid
          spacing={{ xs: 0, sm: 0 }}
          columns={{ xs: 12 }}
          container
          item
          direction="row"
          justifyContent={"space-around"}
          sx={{
            m: { xs: "0", sm: "0" },
            p: { xs: "0", sm: "0" },
            width: "100%",
            backgroundColor: "#D4D4D4"
          }}
        >

          {advantages.map((adv, index) => (
            <Grid item xs={12} sm={6} md={3} container justifyContent="center" sx={{ p: { xs: "0", sm: "0" }, }}>
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  width: '90%',
                  m: "0",
                  pt:"60px",
                  pb:"5px",
                
                  opacity: 1,
                }}
              >
                <img src={advantages[index].img} alt="Advantage" className="advantages" />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: "1.1rem" },
                    my: "25px",
                    textAlign: "center",
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
          sx={{
            margin: { xs: "0", sm: "0" },
            px: { sm: "2em" },

          }}
        >

          <Grid container item xs={12} sm={12} md={6} spacing={0}>

            <Box
              sx={{
                width:"90%",
                m: "auto",
                p:"20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {" "}
              <div className="bottomImages">
                <img src="/friends.png" className="community" />{" "}
                
              </div>
              
            </Box>
          </Grid>
          <Grid container item xs={12} sm={12} md={5} alignItems={"center"} spacing={0}>
            <Box
            sx={{p:"20px",}}>
              <Typography
                variant="p"
                sx={{
                  fontWeight: 300,
                  fontSize: {
                    xs: "1rem",
                   
                  },
                  color: "#aaaaaa",
                  mt: "2vh",

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
                  fontSize: {
                    xs: "0.9rem",
                    sm: "1rem",
                  },
                  width: "auto",
                  padding: "10px",
                  maxWidth: "50%",
                  color: "#aaaaaa",
                }}
              >
                Romans 12:16
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>


  );
};
export default LandingPage;
