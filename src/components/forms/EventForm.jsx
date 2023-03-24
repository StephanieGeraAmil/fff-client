import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unsetForm } from "../../actions/globalStateActions";
import { addEventOnBack, updateEventOnBack } from "../../hooks/useSocket";
import {
  Button,
  TextField,
  Typography,
  FormControl,
  FormGroup,
  Select,
  MenuItem,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  Slider,
  Grid,
  Switch,
  Stack,
  Container,
  Box,
} from "@mui/material";
import Woman2OutlinedIcon from "@mui/icons-material/Woman2Outlined";
import WcOutlinedIcon from "@mui/icons-material/WcOutlined";
import Man2OutlinedIcon from "@mui/icons-material/Man2Outlined";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export const EventForm = () => {
  const form = useSelector((state) =>
    state.current.form ? state.current.form : null
  );
  const userLogged = useSelector((state) =>
    state.current.user ? state.current.user : null
  );

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  // const [eventDate, setEventDate] = useState("");
  const [eventType, setEventType] = useState("");
  const [targetGender, setTargetGender] = useState("");
  const [repetition, setRepetition] = useState(false);
  const [targetAgeRange, setTargetAgeRange] = useState([20, 37]);

  const typesAvaiable = [
    { name: "Bible Study", img: `/bible.png`, id: 1 },
    { name: "Coffee", img: `/coffee.png`, id: 2 },
    { name: "Pizza", img: `/pizza.png`, id: 3 },
    { name: "Church", img: `/church.png`, id: 4 },
    { name: "Movies", img: `/tv.png`, id: 5 },
    { name: "Fitness", img: `/fitness.png`, id: 6 },
    { name: "Pray", img: `/pray.png`, id: 7 },
  ];

  const minAgeRange = 5;
  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setTargetAgeRange([
        Math.min(newValue[0], targetAgeRange[1] - minAgeRange),
        targetAgeRange[1],
      ]);
    } else {
      setTargetAgeRange([
        targetAgeRange[0],
        Math.max(newValue[1], targetAgeRange[0] + minAgeRange),
      ]);
    }
  };
  const handleRepeatChange = (event) => {
    setRepetition(event.target.checked);
  };
  const marks = [
    {
      value: 10,
    },
    {
      value: 20,
      label: "20",
    },
    {
      value: 30,
    },
    {
      value: 40,
      label: "40",
    },
    {
      value: 50,
    },
    {
      value: 60,
      label: "60",
    },
    {
      value: 70,
    },
    {
      value: 80,
      label: "80",
    },
    {
      value: 90,
    },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();

    const typeOfEvent = typesAvaiable.filter((type) => type.id == eventType);

    const eventData = {
      title: title,
      description: description,
      type: typeOfEvent[0].name,
      img: "." + typeOfEvent[0].img,
      creator: userLogged.id,
      eventDate: date,
      targetGender: targetGender,
      targetAgeRange: targetAgeRange,
    };
    if (form.positionSelected) {
      eventData.lat = form.positionSelected.lat;
      eventData.lng = form.positionSelected.lng;
    }
    if (form.event) {
      eventData.createdAt = form.event.createdAt;
      eventData.id = form.event.id;
      eventData.lat = form.event.lat;
      eventData.lng = form.event.lng;
    }
    if (form.type === "AddEvent") addEventOnBack(eventData);
    else if (form.type === "EditEvent") updateEventOnBack(eventData);
    dispatch(unsetForm());
  };
  useEffect(() => {
    if (form.type === "EditEvent") {
      //display the values already saved on the event
      if (form.event) {
        if (form.event.date) {
          const date = new Date(form.event.date);
          setDate(dayjs(date.toISOString().slice(0, 10)));
        } else {
          setRepetition(false);
        }
        if (form.event.title) {
          setTitle(form.event.title);
        }
        if (form.event.description) {
          setDescription(form.event.description);
        }
        if (form.event.targetAgeRange) {
          setTargetAgeRange(form.event.targetAgeRange);
        }
        if (form.event.targetGender) {
          setTargetGender(form.event.targetGender);
        }
        if (form.event.type) {
          const typeOfEvent = typesAvaiable.filter(
            (type) => type.name === form.event.type
          );
          setEventType(typeOfEvent[0].id);
        }
      }
    }
  }, []);

  return (
    <>
      <Typography variant="h2" gutterBottom>
        New Event
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              label="Title"
              variant="standard"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              multiline
              maxRows={3}
              label="Description"
              variant="standard"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl variant="standard" sx={{ width: "100%" }}>
            <InputLabel id="type-of-event">Type of Event</InputLabel>
            <Select
              labelId="type-of-event"
              id="type-select"
              label="Event type"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
            >
              {typesAvaiable.map((type) => {
                return (
                  <MenuItem key={type.id} value={type.id}>
                    {type.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Container
            sx={{
              width: "90%",
              m: "auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "0.5px solid white",
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: 100 }}
            >
              Who is it for?
            </Typography>
            <Grid container xs={12}>
              <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  sx={{ fontWeight: 100, fontSize: 10 }}
                >
                  Gender
                </Typography>
              </Grid>
              <Grid item xs={10} sx={{ display: "flex", alignItems: "center" }}>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={targetGender}
                    onChange={(e) => setTargetGender(e.target.value)}
                    size="small"
                    sx={{ m: 0 }}
                  >
                    <Box
                      sx={{m: 0 , display: "flex", alignItems: "center" }}
                    >
                      <FormControlLabel
                        sx={{ m: 0 }}
                        value="female"
                        control={<Radio size="small" />}
                        labelPlacement="start"
                      />

                      <Woman2OutlinedIcon sx={{ m: 0 }} />
                    </Box>
                    <Box
                      
                      sx={{m: 0 , display: "flex", alignItems: "center" }}
                    >
                      <FormControlLabel
                        sx={{ m: 0 }}
                        value="male"
                        control={<Radio size="small" />}
                        labelPlacement="start"
                      />

                      <Man2OutlinedIcon sx={{ m: 0 }} />
                    </Box>
                    <Box
                  
                      sx={{ m: 0 ,display: "flex", alignItems: "center" }}
                    >
                      <FormControlLabel
                        sx={{ m: 0 }}
                        value="all"
                        control={<Radio size="small" />}
                        labelPlacement="start"
                      />
                      <WcOutlinedIcon sx={{ m: 0 }} />
                    </Box>
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  sx={{ fontWeight: 100, fontSize: 10 }}
                >
                  Age
                </Typography>
              </Grid>
              <Grid item xs={10} sx={{ display: "flex", alignItems: "center" }}>
                <FormControl sx={{ width: "100%" }}>
                  {" "}
                  <Slider
                    getAriaLabel={() => "Minimum distance"}
                    value={targetAgeRange}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    disableSwap

                    // marks={marks}
                    // valueLabelDisplay="on"
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={12}>
          {" "}
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormControlLabel
              control={
                <Switch checked={repetition} onChange={handleRepeatChange} />
              }
              label={repetition ? "Recurrent Event" : "Single Event"}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          {!repetition && (
            <FormControl label="Responsive variant">
              <DatePicker
                label="Event Date"
                value={date}
                onChange={(newValue) => setDate(newValue)}
              />
            </FormControl>
          )}
        </Grid>

        <Grid item xs={12}>
          <Button
            sx={{ mt: 1 }}
            variant="contained"
            onClick={(e) => handleSubmit(e)}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
