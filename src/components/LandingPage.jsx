import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Grid, Typography, Container } from "@mui/material";
import { LoginButton } from "./0auth/LoginButton";

const LandingPage = () => {
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
      <Grid container item spacing={{ sx: 5, sm: 1 }}>
        <Grid
          container
          item
          xs={12}
          xl={9}
          direction="row"
          sx={{
            mx: { xs: "0", sm: "auto" },
          }}
        >
          <div className="topSection">
            <img src="/sadGirl.png" className="alone" />
            <img src="/shape.png" className="shape" />
            <div className="diamond">

              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#d4d4d4"d="M45.4,-43.5C56.7,-44.7,62.1,-28.3,60.6,-14.1C59,0.1,50.5,12.2,41.2,19.6C31.9,27,21.9,29.8,14,28.2C6.2,26.5,0.5,20.4,-7.5,18.5C-15.5,16.5,-25.7,18.6,-31.7,15C-37.6,11.4,-39.2,2.1,-36.9,-5.7C-34.6,-13.6,-28.4,-20,-21.6,-19.6C-14.8,-19.2,-7.4,-12.1,4.8,-17.9C17.1,-23.6,34.2,-42.3,45.4,-43.5Z" transform="translate(100 100)" />
              </svg>
              <div className="textInsideDiamond">
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "8vw", sm: "4vw", lg: "4.5vw" },
                  }}
                  align="center"
                >
                  Feeling Lonely?
                </Typography>
                {/* <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "1.2rem", sm: "2vw", lg:"1.2vw" },
                  }}
                >
                  Discover Connection and Community
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: 300,
                    fontSize: {
                      xs: "1rem",
                      sm: "1.2vw"
                    },
                    textAling: "left",
                    lineHeight: {
                      xs: "1rem",
                      sm: "1em",
                    },
                  }}
                  align="center"
                >
                  We all need connection and support to thrive. This app helps you meet like-minded individuals and build strong communities.

                </Typography> */}
                <LoginButton text="Start now" />
              </div>
            </div>
          </div>
        </Grid>

        <Grid
          container
          item
          direction="row"
          sx={{
            p: 2,
            backgroundColor: "#D4D4D4",
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
              sx={{ fontWeight: 300, fontSize: { xs: "1.6rem", sm: "4.2vw" } }}
            >
              Simple steps
            </Typography>
            {/* <Typography
              variant="p"
              align="left"
              sx={{
                fontWeight: 100,
                fontSize: { xs: "1rem", sm: "1.2vw" },
                mt: { xs: "2vh", sm: 0 },
              }}
            >
              This is a simple app, that just want to connect christians and to
              help ​strengthen communities;
            </Typography> */}
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
              <Grid container item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    borderRadius: { xs: "4vw", sm: "2vw" },
                    p: { xs: "2rem", sm: "1rem" },
                    width: { xs: "100%", lg: "95%" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",

                  }}
                  backgroundColor="#fff"
                >
                  <div className="circleNumber">
                    <Typography
                      variant="h6"
                      // align="left"
                      sx={{
                        fontWeight: 500,
                        fontSize: { xs: "1.2rem", sm: "2.2vw", xl: "1.8vw" },
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      1
                    </Typography>
                  </div>
                  <Typography
                    variant="h5"
                    align="left"
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: "1.3rem", sm: "2.5vw", lg: "1.8vw", xl: "1.2vw" },
                      mt: "3vh",
                      mb: "3vh",
                    }}
                  >
                    Signup with Confidence
                  </Typography>
                  <Typography
                    variant="p"
                    align="left"
                    sx={{
                      fontWeight: 100,
                      fontSize: {
                        xs: "1rem",
                        sm: "1.2vw",
                      },
                      fontStyle: "italic",
                    }}
                  >
                    No Spam Promise: We only ask for your gender and age to tailor events for you.
                  </Typography>
                </Box>
              </Grid>
              <Grid container item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    borderRadius: { xs: "4vw", sm: "2vw" },
                    p: { xs: "2rem", sm: "1rem" },
                    width: { xs: "100%", lg: "95%" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",

                  }}
                  backgroundColor="#fff"
                >
                  <div className="circleNumber">
                    <Typography
                      variant="h6"
                      // align="left"
                      sx={{
                        fontWeight: 500,
                        fontSize: { xs: "1.2rem", sm: "2.2vw", xl: "1.8vw" },
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      2
                    </Typography>
                  </div>
                  <Typography
                    variant="h5"
                    align="left"
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: "1.3rem", sm: "2.5vw", lg: "1.8vw", xl: "1.2vw" },
                      mt: "3vh",
                      mb: "3vh",
                    }}
                  >
                    Explore Local Events
                  </Typography>
                  <Typography
                    variant="p"
                    align="left"
                    sx={{
                      fontWeight: 100,
                      fontSize: {
                        xs: "1rem",
                        sm: "1.2vw",
                      },
                      fontStyle: "italic",
                    }}
                  >
                    Find events nearby to foster real-life interactions.
                  </Typography>
                </Box>
              </Grid>

              <Grid container item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    borderRadius: { xs: "4vw", sm: "2vw" },
                    p: { xs: "2rem", sm: "1rem" },
                    width: { xs: "100%", lg: "95%" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",

                  }}
                  backgroundColor="#fff"
                >
                  <div className="circleNumber">
                    <Typography
                      variant="h6"
                      // align="left"
                      sx={{
                        fontWeight: 500,
                        fontSize: { xs: "1.2rem", sm: "2.2vw", xl: "1.8vw" },
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      3
                    </Typography>
                  </div>
                  <Typography
                    variant="h5"
                    align="left"
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: "1.3rem", sm: "2.5vw", lg: "1.8vw", xl: "1.2vw" },
                      mt: "3vh",
                      mb: "3vh",
                    }}
                  >
                    Engage and Participate
                  </Typography>
                  <Typography
                    variant="p"
                    align="left"
                    sx={{
                      fontWeight: 100,
                      fontSize: { xs: "1rem", sm: "1.2vw" },
                      fontStyle: "italic",
                    }}
                  >
                    Join available group chats or attend events in person. Building friendships and community is rewarding and fulfilling.
                  </Typography>
                </Box>
              </Grid>
              <Grid container item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    borderRadius: { xs: "4vw", sm: "2vw" },
                    p: { xs: "2rem", sm: "1rem" },
                    width: { xs: "100%", lg: "95%" },
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",

                  }}
                  backgroundColor="#fff"
                >
                  <div className="circleNumber">
                    <Typography
                      variant="h6"
                      // align="left"
                      sx={{
                        fontWeight: 500,
                        fontSize: { xs: "1.2rem", sm: "2.2vw", xl: "1.8vw" },
                        fontFamily: "Montserrat, sans-serif",
                      }}
                    >
                      4
                    </Typography>
                  </div>
                  <Typography
                    variant="h5"
                    align="left"
                    sx={{
                      fontWeight: 500,
                      fontSize: { xs: "1.3rem", sm: "2.5vw", lg: "1.8vw", xl: "1.2vw" },
                      mt: "3vh",
                      mb: "3vh",
                    }}
                  >
                    Create and Share Events
                  </Typography>

                  <Typography
                    variant="p"
                    align="left"
                    sx={{
                      fontWeight: 100,
                      fontSize: {
                        xs: "1rem",
                        sm: "1.2vw",
                      },
                      fontStyle: "italic",
                    }}
                  >
                    Have a great idea? Start your own event. Don’t worry about attendance; every connection matters.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          item
          xs={12}
          sx={{
            my: "10vh",
          }}
        >
          <Grid
            spacing={{ xs: 4, sm: 2 }}
            columns={{ xs: 12, sm: 6 }}
            container
            item
          >
            <Grid container item xs={12} md={5}>
              <Box
                sx={{
                  width: "80%",
                  zIndex: "2",
                  m: { xs: "auto", sm: 0 },
                  ml: { sm: "20%" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 300,
                    fontSize: { xs: "1.4rem", sm: "4vw" },
                  }}
                >
                  Community is Vital
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: 500,
                    fontSize: {
                      xs: "1rem",
                      sm: "1.1vw",
                    },
                    my: "2vh",
                  }}
                >
                  By fostering generosity, gratitude, and support, we heal, grow, and participate in a larger plan.
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: 100,
                    fontSize: {
                      xs: "1rem",
                      sm: "1.1vw",
                    },

                    '& ul': {
                      paddingLeft: '3rem',
                      margin: '1rem 0',
                    },
                    '& li': {
                      marginBottom: '8px',
                    }
                  }}
                >
                  Close relationships with others offer:

                  <ul>
                    <li> Improved Mental Health</li>
                    <li>Enhanced Well-being</li>
                    <li>Increased Longevity</li>
                    <li>Learning Opportunities</li>
                    <li>Emotional Support</li>
                    <li>Encouragement and Accountability</li>
                    <li>Wise Counsel</li>
                    <li>Opportunities to Collaborate</li>
                  </ul>
                </Typography>

                <LoginButton text="Start now" />
              </Box>
            </Grid>

            <Grid container item xs={12} sm={12} md={7}>
              <Box
                sx={{
                  width: { xs: "90%", md: "60%" },
                  mx: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {" "}
                <div className="bottomImages">
                  <img src="/friends.png" className="community" />{" "}
                  <img src="/shape2.png" className="bottomShape" />
                </div>
                <Box
                  sx={{
                    width: { xs: "90%", sm: "80%", md: "70%", lg: "60%" },
                    zIndex: "2",
                    mx: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="p"
                    sx={{
                      fontWeight: 100,
                      fontSize: {
                        xs: "0.9rem",
                        sm: "1vw",
                      },
                      fontStyle: "italic",
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
                        sm: "1vw",
                      },
                      width: "auto",
                      maxWidth: "50%",
                      fontStyle: "italic",
                    }}
                  >
                    Romans 12:16
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default LandingPage;
