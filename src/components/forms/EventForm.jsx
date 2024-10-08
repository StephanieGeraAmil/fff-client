import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unsetForm } from "../../actions/globalStateActions";
import { addEventOnBack, updateEventOnBack } from "../../hooks/useSocket";
import {
  Button,
  TextField,
  Typography,
  FormControl,
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
  const [eventType, setEventType] = useState("");
  const [targetGender, setTargetGender] = useState("all");
  const [repetition, setRepetition] = useState(false);
  const [targetAgeRange, setTargetAgeRange] = useState([20, 37]);
  const [chatLink, setChatLink] = useState("");
  const [webLink, setWebLink] = useState("");
  // const [error, setError] = useState("");

  const typesAvaiable = [
    { name: "Bible Study", img: `/bible.png`, id: 1 },
    { name: "Coffee", img: `/coffee.png`, id: 2 },
    { name: "Food", img: `/pizza.png`, id: 3 },
    { name: "Church", img: `/church.png`, id: 4 },
    { name: "Movies", img: `/tv.png`, id: 5 },
    { name: "Fitness", img: `/fitness.png`, id: 6 },
    { name: "Pray", img: `/pray.png`, id: 7 },
  ];

  useEffect(() => {
    if (form.type === "EditEvent") {
      //display the values already saved on the event
      if (form.event) {
        if (form.event.date) {
          setRepetition(false);
          const date = new Date(form.event.date);
          setDate(dayjs(date.toISOString().slice(0, 10)));
        } else {
          setRepetition(true);
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
        if (form.event.chatLink) {
          setChatLink(form.event.chatLink);
        }
        if (form.event.webLink) {
          setWebLink(form.event.webLink);
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
  const minAgeRange = 5;
  const handleSliderChange = (event, newValue, activeThumb) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!repetition && !date) {
    //   setError("If the event isn't recurring, it needs a date.");
    //   return; // Prevent form submission if date is required but not provided
    // }

    const typeOfEvent = typesAvaiable.filter((type) => type.id == eventType);

    const eventData = {
      title: title,
      description: description,
      type: typeOfEvent[0].name,
      img: "." + typeOfEvent[0].img,
      creator: userLogged.id,

      targetGender: targetGender,
      targetAgeRange: targetAgeRange,
    };

    if (chatLink) {
      eventData.chatLink = chatLink;
    }
    if (webLink) {
      eventData.webLink = webLink;
    }
    if (!repetition) {
      eventData.date = date;
    } else {
      eventData.date = null;
    }
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


  return (
    <>
      <Typography variant="h2" gutterBottom>
        New Event
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              required
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
              required
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
            <InputLabel id="type-of-event">
              Type of Event
              <span> *</span>
            </InputLabel>
            <Select
              required
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
              <span> *</span>
            </Typography>
            <Grid container>
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
                    <Box sx={{ m: 0, display: "flex", alignItems: "center" }}>
                      <FormControlLabel
                        sx={{ m: 0 }}
                        value="female"
                        control={<Radio size="small" />}
                        labelPlacement="start"
                      />

                      <Woman2OutlinedIcon sx={{ m: 0 }} />
                    </Box>
                    <Box sx={{ m: 0, display: "flex", alignItems: "center" }}>
                      <FormControlLabel
                        sx={{ m: 0 }}
                        value="male"
                        control={<Radio size="small" />}
                        labelPlacement="start"
                      />

                      <Man2OutlinedIcon sx={{ m: 0 }} />
                    </Box>
                    <Box sx={{ m: 0, display: "flex", alignItems: "center" }}>
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
                    // required
                    //   getAriaLabel={() => "Minimum distance"}
                    value={targetAgeRange}
                    onChange={handleSliderChange}
                    valueLabelDisplay="auto"
                    disableSwap
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
                value={date ? date : null}
                onChange={(newValue) => setDate(newValue)}
                enableCloseOnSelect={true}
              />
            </FormControl>
          )}
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              label="Group Chat Link"
              variant="standard"
              value={chatLink}
              onChange={(e) => setChatLink(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ width: "100%" }}>
            <TextField
              label="Web Link"
              variant="standard"
              value={webLink}
              onChange={(e) => setWebLink(e.target.value)}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button
            sx={{ mt: 1 }}
            variant="contained"
            onClick={handleSubmit}
            disabled={
              !title ||
              !description ||
              !eventType ||
              !targetGender ||
              !targetAgeRange||
              (!date && !repetition)
            }
          >
            Save
          </Button>
        </Grid>
      </Grid>
      {/* {error && <Typography color="red">{error}</Typography>} */}
    </>
  );
};
