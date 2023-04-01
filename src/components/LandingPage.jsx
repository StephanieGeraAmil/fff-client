import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid, Typography, Container, Paper } from "@mui/material";

const LandingPage = () => {
  return (

      <Grid
        container
        item
        sx={{ backgroundColor: "#fff", color: "#0E0A05" }}
        spacing={{ sx: 5, sm: 1 }}
        direction="column"
      ><Grid
         container
        item
        spacing={{ sx: 5, sm: 1 }}
      >
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
                  width: "18vw",
                  height: "3vw",
                  fontSize: "1.2vw",
                  backgroundColor: "#545454",
                  borderRadius: "1vw",
                  minWidth:"85px"
                }}
                variant="contained"
              >
                Find Community
              </Button>
            </Link>
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
            sm={6}
            justifyContent={"center"}
            alignItems={"center"}
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
            container
            item
            direction="column"
            xs={12}
            sm={6}
            sx={{ p: "4%", m: "auto", maxWidth: "300px" }}
          >
            <Typography
              variant="body2"
              align="justify"
              sx={{ fontWeight: 100, fontSize: "1.2vw", pb: "3%" }}
            >
              God created us to love and be loved, and we need people around us
              in order to do that.
            </Typography>
            <Typography
              variant="body2"
              align="justify"
              sx={{ fontWeight: 100, fontSize: "1.2vw", pb: "3%" }}
            >
              Through generosity, gratitude and service, we HEAL, GROW and get
              to PARTICIPATE in Gods amazing plan.
            </Typography>
            <Typography
              variant="body2"
              align="justify"
              sx={{ fontWeight: 100, fontSize: "1.2vw", pb: "3%" }}
            >
              When we are in close relationships with other believers, we have
              people to teach us,to pray for us,to support us,to encourage us,to
              hold us accountable,to give us wise counsel and to serve alongside
              us .
            </Typography>
            <Link to="/map" style={{ textDecoration: "none" }}>
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
            xs={12}
            sm={6}
            sx={{ m: "auto", p: "4%", maxWidth: "300px" }}
            order={{ xs: 2, sm: 1 }}
          >
            <Container
              sx={{
                backgroundColor: "#545454",
                color: "#fff",
                borderRadius: "1vw",
                display: "flex",
                height: "8vw",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                mb: "3%",
              }}
            >
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
            </Container>
            <Container
              sx={{
                backgroundColor: "#545454",
                color: "#fff",
                height: "8vw",
                borderRadius: "1vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
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
            </Container>
          </Grid>
          <Grid
            container
            item
            direction="column"
            xs={12}
            sm={6}
            order={{ xs: 1, sm: 2 }}
            justifyContent={"center"}
            alignItems={"center"}
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
              mb:-15,
               pt:2
            }}
          >
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
             <img src="/pexels-belle-co-1000445.png" className="community" />
        </Grid>
        </Grid>
      </Grid>
   
  
  );
};
export default LandingPage;
