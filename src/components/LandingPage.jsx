import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography, Container } from "@mui/material";
import {LoginButton} from "./0auth/LoginButton";
const LandingPage = () => {
  return (
    <Grid
      container
      item
      sx={{ backgroundColor: "#fff", color: "#0E0A05" }}
      spacing={{ sx: 5, sm: 1 }}
      direction="column"
    >
      <Grid container item spacing={{ sx: 5, sm: 1 }}>
        <Grid
          container
          item
          xs={8}
          direction="row"
          sx={{
            width: "85%",
            mx: "auto",
          }}
        >
          <Grid
            container
            item
            sx={{
              height: "35vw",
              zIndex: "1000",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: "max(6vw,2.7rem)",
              }}
            >
              Nobody
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 500,
                fontSize: "max(3vw,1.4rem)",
              }}
            >
              should be alone
            </Typography>
            <LoginButton text="Find Community"/> 
          </Grid>
        </Grid>

        <img src="/pexels-pixabay-247195.png" className="alone" />
        <Grid
          container
          item
          direction="row"
          sx={{
            mt: "3%",
            width: "85%",
            mx: "auto",
          }}
        >
          <Grid
            container
            item
            direction="column"
            xs={12}
            sm={7}
            justifyContent={"center"}
            alignItems={"center"}
            order={{ xs: 2, sm: 1 }}
          >
            <img src="/EventInfo.png" className="laptop" />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 500,
                fontSize: "max(2vw,1.3rem)",
              }}
            >
              Look for events in your area
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 100, fontSize: "max(1.5vw,1.1rem)" }}
            >
              Join the group chat if it is provided and say Hi!
            </Typography>
          </Grid>

          <Grid
            container
            item
            direction="column"
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
            xs={12}
            sm={5}
            sx={{ p: "4%" }}
            order={{ xs: 1, sm: 2 }}
          >
            <Grid item>
              <Typography
                variant="body2"
                align="justify"
                sx={{
                  fontWeight: 100,
                  fontSize: "max(1.2vw,0.7rem)",
                  pb: "3%",
                }}
              >
                God created us to love and be loved, and we need people around
                us in order to do that.
              </Typography>
              <Typography
                variant="body2"
                align="justify"
                sx={{
                  fontWeight: 100,
                  fontSize: "max(1.2vw,0.7rem)",
                  pb: "3%",
                }}
              >
                Through generosity, gratitude and service, we HEAL, GROW and get
                to PARTICIPATE in Gods amazing plan.
              </Typography>
              <Typography
                variant="body2"
                align="justify"
                sx={{
                  fontWeight: 100,
                  fontSize: "max(1.2vw,0.7rem)",
                  pb: "3%",
                }}
              >
                When we are in close relationships with other believers, we have
                people to teach us,to pray for us,to support us,to encourage
                us,to hold us accountable,to give us wise counsel and to serve
                alongside us .
              </Typography>
            </Grid>
            <Grid item alignSelf={"flex-end"}>
               <LoginButton text="Start Now"/>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          item
          direction="row"
          sx={{
            mt: "2%",
            width: "85%",
            mx: "auto",
          }}
        >
          <Grid
            container
            item
            direction="column"
            justifyContent={"center"}
            xs={12}
            sm={5}
            order={{ xs: 2, sm: 1 }}
            sx={{
              mb: "8%",
              mt: "3%",
            }}
          >
            <Grid item>
              <Container
                maxWidth="80%"
                disableGutters={true}
                sx={{
                  width: "75%",
                  backgroundColor: "#545454",
                  color: "#fff",
                  borderRadius: "max(1vw,10px)",
                  display: "flex",
                  height: "9vw",
                  minHeight: "110px",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  mb: "3%",

                  p: "5%",
                }}
              >
                <Typography
                  variant="body2"
                  align="justify"
                  sx={{ fontWeight: 100, fontSize: "max(1vw,0.7rem)" }}
                >
                  Live in harmony with each other. Don’t be too proud to enjoy
                  the company of ordinary people. And don’t think you know it
                  all!
                </Typography>
                <Typography
                  variant="body2"
                  align="right"
                  sx={{
                    fontWeight: 100,
                    fontSize: "max(1vw,0.7rem)",
                    alignSelf: "flex-end",
                  }}
                >
                  Romans 12:16
                </Typography>
              </Container>
            </Grid>
            <Grid item>
              <Container
                maxWidth="80%"
                disableGutters={true}
                sx={{
                  height: "9vw",
                  minHeight: "110px",
                  width: "75%",
                  backgroundColor: "#545454",
                  color: "#fff",
                  borderRadius: "max(1vw,10px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  p: "5%",
                }}
              >
                <Typography
                  align="justify"
                  variant="body2"
                  sx={{ fontWeight: 100, fontSize: "max(1vw,0.7rem)" }}
                >
                  But if we are living in the light, as God is in the light,
                  then we have fellowship with each other, and the blood of
                  Jesus, his Son, cleanses us from all sin.
                </Typography>
                <Typography
                  variant="body2"
                  align="right"
                  sx={{
                    fontWeight: 100,
                    fontSize: "max(1vw,0.7rem)",
                    alignSelf: "flex-end",
                  }}
                >
                  1 John 1:7
                </Typography>
              </Container>
            </Grid>
          </Grid>
          <Grid
            container
            item
            direction="column"
            xs={12}
            sm={7}
            order={{ xs: 1, sm: 2 }}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <img src="/newEvent.png" className="laptop" />
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 100, fontSize: "max(1.5vw,1.1rem)" }}
            >
              Once you Login you can
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: 500, fontSize: "max(2vw,1.3rem)" }}
            >
              Create new events
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          direction="row"
          sx={{
            mt: "3%",
          }}
        >
          <Grid
            container
            item
            sx={{
              zIndex: "1000",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              mb: "-15vw",
              pt: 2,
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 500, fontSize: "max(2vw,1rem)", mr: "1vw" }}
            >
              Go to meetings,
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 100, fontSize: "max(1.5vw,0.8rem)" }}
            >
              Develop friendships, build your godly community
            </Typography>
          </Grid>
          <img src="/pexels-belle-co-1000445.png" className="community" />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default LandingPage;
