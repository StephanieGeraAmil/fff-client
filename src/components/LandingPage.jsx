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
        marginTop: "10vh",
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
              <div className="textInsideDiamond">
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "4vh", sm: "4vw" },
                  }}
                >
                  Are you lonely?
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: 300,
                    fontSize: {
                      xs: "2vh",
                      sm: "1.5vw",
                    },
                    textAling: "left",
                    lineHeight: "1em",
                  }}
                >
                  ​God created us to love and be loved, and we need people
                  around us in order to do that.
                </Typography>
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
            mt: {
              xs: "40vh",
              sm: "50vh",
              md: "70vh",
              xl: "90vh",
            },
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
              sx={{ fontWeight: 300, fontSize: { xs: "4vh", sm: "5vw" } }}
            >
              Simple steps
            </Typography>
            <Typography
              variant="p"
              align="left"
              sx={{
                fontWeight: 100,
                fontSize: { xs: "2vh", sm: "1.5vw" },
                mt: { xs: "2vh", sm: 0 },
              }}
            >
              This is a simple app, that just want to connect christians and to
              help ​strengthen communities;
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
              <Grid container item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    borderRadius: { xs: "4vw", sm: "2vw" },
                    p: { xs: "3vh", sm: "4vh" },
                    width: { xs: "100%", lg: "95%" },
                  }}
                  direction="column"
                  backgroundColor="#fff"
                  justifyContent={"flex-start"}
                  alignItems={"flex-start"}
                >
                  <div className="circleNumber">
                    <Typography
                      variant="h6"
                      align="left"
                      sx={{
                        fontWeight: 500,
                        fontSize: { xs: "2.5vh", sm: "2vw" },
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
                      fontSize: { xs: "2.5vh", sm: "3vh", lg: "3.5vh" },
                      mt: "3vh",
                      mb: "3vh",
                    }}
                  >
                    Login
                  </Typography>
                  <Typography
                    variant="p"
                    align="left"
                    sx={{
                      fontWeight: 100,
                      fontSize: { xs: "2vh", sm: "2.5vh" },
                      fontStyle: "italic",
                    }}
                  >
                    We promise wont send you spam.You need to have an account to
                    create and edit events.We will only ask for your gender and
                    age information to filter the events that best fit you
                  </Typography>
                </Box>
              </Grid>
              <Grid container item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    borderRadius: { xs: "4vw", sm: "2vw" },
                    p: { xs: "3vh", sm: "4vh" },
                    width: { xs: "100%", lg: "95%" },
                  }}
                  direction="column"
                  backgroundColor="#fff"
                  justifyContent={"flex-start"}
                  alignItems={"flex-start"}
                >
                  <div className="circleNumber">
                    <Typography
                      variant="h6"
                      align="left"
                      sx={{
                        fontWeight: 500,
                        fontSize: { xs: "2.5vh", sm: "2vw" },
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
                      fontSize: { xs: "2.5vh", sm: "3vh", lg: "3.5vh" },
                      mt: "3vh",
                      mb: "3vh",
                    }}
                  >
                    Check the events in your area
                  </Typography>
                  <Typography
                    variant="p"
                    align="left"
                    sx={{
                      fontWeight: 100,
                      fontSize: { xs: "2vh", sm: "2.5vh" },
                      fontStyle: "italic",
                    }}
                  >
                    This is meant to be a tool for off-line conection, so the
                    closer, the better
                  </Typography>
                </Box>
              </Grid>

              <Grid container item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    borderRadius: { xs: "4vw", sm: "2vw" },
                    p: { xs: "3vh", sm: "4vh" },
                    width: { xs: "100%", lg: "95%" },
                  }}
                  direction="column"
                  backgroundColor="#fff"
                  justifyContent={"flex-start"}
                  alignItems={"flex-start"}
                >
                  <div className="circleNumber">
                    <Typography
                      variant="h6"
                      align="left"
                      sx={{
                        fontWeight: 500,
                        fontSize: { xs: "2.5vh", sm: "2vw" },
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
                      fontSize: { xs: "2.5vh", sm: "3vh", lg: "3.5vh" },
                      mt: "3vh",
                      mb: "3vh",
                    }}
                  >
                    Join the group chat if available or go to the meeting point
                    on time
                  </Typography>
                  <Typography
                    variant="p"
                    align="left"
                    sx={{
                      fontWeight: 100,
                      fontSize: { xs: "2vh", sm: "2.5vh" },
                      fontStyle: "italic",
                    }}
                  >
                    This is the hardest part, but you wont regret it.Develop
                    friendships, build your godly community
                  </Typography>
                </Box>
              </Grid>
              <Grid container item xs={12} sm={6} md={3}>
                <Box
                  sx={{
                    borderRadius: { xs: "4vw", sm: "2vw" },
                    p: { xs: "3vh", sm: "4vh" },
                    width: { xs: "100%", lg: "95%" },
                  }}
                  direction="column"
                  backgroundColor="#fff"
                  justifyContent={"flex-start"}
                  alignItems={"flex-start"}
                >
                  <div className="circleNumber">
                    <Typography
                      variant="h6"
                      align="left"
                      sx={{
                        fontWeight: 500,
                        fontSize: { xs: "2.5vh", sm: "2vw" },
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
                      fontSize: { xs: "2.5vh", sm: "3vh", lg: "3.5vh" },
                      mt: "3vh",
                      mb: "3vh",
                    }}
                  >
                    Create new events
                  </Typography>

                  <Typography
                    variant="p"
                    align="left"
                    sx={{
                      fontWeight: 100,
                      fontSize: { xs: "2vh", sm: "2.5vh" },
                      fontStyle: "italic",
                    }}
                  >
                    If you have an idea ,create an event, and don't get
                    discouraged if few people show up.Everything will happen on
                    Gods timing, be patient
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
            <Grid container item xs={12} sm={5}>
              <Box
                sx={{
                  width: "80%",
                   zIndex:"2",
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
                    fontSize: { xs: "4vh", md: "3.5vw", xl: "4vw" },
                  }}
                >
                  Community is vital
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontWeight: 500,
                    fontSize: { xs: "2vh", sm: "2.5vh" },
                    my: "2vh",
                  }}
                >
                  Through generosity, gratitude and service, we HEAL, GROW and
                  get to PARTICIPATE in Gods amazing plan
                </Typography>
                <Typography
                  variant="p"
                  sx={{ fontWeight: 100, fontSize: { xs: "2vh", sm: "2.5vh" } }}
                >
                  When we are in close relationships with other believers, we
                  have people to teach us,to pray for us,to support us,to
                  encourage us,to hold us accountable,to give us wise counsel
                  and to serve alongside us.
                </Typography>
                <LoginButton text="Start now" />
              </Box>
            </Grid>

            <Grid container item xs={12} sm={7}>
              <Box
                sx={{
                  // width: { xs: "90%", md: "60%" },
                  mx: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                
                }}
              >  <div className="bottomImages">
                <img src="/friends.png" className="community" />{" "}
                 <img src="/shape2.png" className="bottomShape" />
               </div>
                <Box
                sx={{
                  width: { xs: "90%",sm:"80%", md: "70%",lg:"60%" },
                  zIndex:"2",
                  mx: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                
                }}
              >
                  <Typography
                    variant="p"
                    sx={{
                      fontWeight: 100,
                      fontSize: { xs: "2vh",sm: "2.2vh",md: "2.5vh" },
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
                      fontSize: { xs: "2vh",sm: "2.2vh", md: "2.5vh" },
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
