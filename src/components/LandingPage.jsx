import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography, Card, CardContent } from "@mui/material";

const LandingPage = () => {
  return (
    <Grid container sx={{ backgroundColor: "#fff", color: "#0E0A05" }}>
      <Grid
        item
        sx={{
          pl: "18%",
          pr: "45%",
          pt: "10%",
          zIndex: "1000",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontSize: "6vw",
          }}
        >
          Nobody
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 500,
            fontSize: "3vw",
          }}
        >
          should be alone
        </Typography>
        <Link to="/map" style={{ textDecoration: "none" }}>
          <Button
            sx={{
              mt: "4%",
              width: "15vw",
              height: "3vw",
              fontSize: "1.2vw",
              backgroundColor: "#545454",
              borderRadius: "1vw",
            }}
            variant="contained"
          >
            Find Community
          </Button>
        </Link>
      </Grid>

      <img src="/pexels-pixabay-247195.png" className="alone" />
      <Grid
        container
        item
        sx={{
          pt: "12%",
          pl: "10%",
          pr: "12%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/EventInfo.png" className="laptop" />
          <Typography variant="h5" sx={{ fontWeight: 500, fontSize: "2vw" }}>
            Look for events in your area
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 100, fontSize: "1.5vw" }}
          >
            Join the group chat if it is provided and say Hi!
          </Typography>
        </Grid>

        <Grid
          item
          xs={5}
          sx={{
            height: "65%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body2"
            align="justify"
            sx={{ fontWeight: 100, fontSize: "1.2vw" }}
          >
            God created us to love and be loved, and we need people around us in
            order to do that.
          </Typography>
          <Typography
            variant="body2"
            align="justify"
            sx={{ fontWeight: 100, fontSize: "1.2vw" }}
          >
            Through generosity, gratitude and service, we HEAL, GROW and get to
            PARTICIPATE in Gods amazing plan.
          </Typography>

          <Typography
            variant="body2"
            align="justify"
            sx={{ fontWeight: 100, fontSize: "1.2vw" }}
          >
            When we are in close relationships with other believers, we have
            people to teach us,to pray for us,to support us,to encourage us,to
            hold us accountable,to give us wise counsel and to serve alongside
            us .
          </Typography>

          <Link to="/map"  style={{ textDecoration: "none" }}>
            <Button
              sx={{
                width: "15vw",
                height: "3vw",
                fontSize: "1.2vw",
                backgroundColor: "#545454",
                borderRadius: "1vw",
              }}
              variant="contained"
            >
              Start Now
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid
        container
        item
        sx={{
          pl: "12%",
          pr: "10%",
          pt: "2.5%",
          // pb: "12%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={5}
          sx={{
            height: "70%",
            pr: "2%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "flex-start",
          }}
        >
          <Card
            sx={{
              backgroundColor: "#545454",
              color: "#fff",
              p: "3%",
              borderRadius: "1vw",
              display: "flex",
              height: "30%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <CardContent>
              <Typography
                variant="body2"
                align="justify"
                sx={{ fontWeight: 100, fontSize: "1vw" }}
              >
                Live in harmony with each other. Don’t be too proud to enjoy the
                company of ordinary people. And don’t think you know it all!
              </Typography>
              <Typography
                variant="body2"
                align="right"
                sx={{
                  fontWeight: 100,
                  fontSize: "1vw",
                  alignSelf: "flex-end",
                }}
              >
                Romans 12:16
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              backgroundColor: "#545454",
              color: "#fff",
              p: "3%",
              height: "30%",
              borderRadius: "1vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <CardContent>
              <Typography
                align="justify"
                variant="body2"
                sx={{ fontWeight: 100, fontSize: "1vw" }}
              >
                But if we are living in the light, as God is in the light, then
                we have fellowship with each other, and the blood of Jesus, his
                Son, cleanses us from all sin.
              </Typography>
              <Typography
                variant="body2"
                align="right"
                sx={{
                  fontWeight: 100,
                  fontSize: "1vw",
                  alignSelf: "flex-end",
                }}
              >
                1 John 1:7
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <img src="/newEvent.png" className="laptop" />
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 100, fontSize: "1.5vw" }}
          >
            Once you Login you can
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 500, fontSize: "2vw" }}>
            Create new events
          </Typography>
        </Grid>
      </Grid>

      <img src="/pexels-belle-co-1000445.png" className="community" />

      <Grid
        container
        item
        xs={12}
        sx={{
          pt: "6%",
          zIndex: "1000",
          display: "inline-flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        {/* <Grid
          item
          xs={12}
          sx={{
            pr: "5%",
            pl: "4%",
            zIndex: "1000",
            display: "inline-flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        > */}
        <Typography
          variant="h5"
          sx={{ fontWeight: 500, fontSize: "2vw", mr: "1vw" }}
        >
          Go to meetings,
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: 100, fontSize: "1.5vw" }}
        >
          Develop friendships, build your godly community
        </Typography>
      </Grid>
      {/* </Grid> */}
    </Grid>
  );
};
export default LandingPage;
