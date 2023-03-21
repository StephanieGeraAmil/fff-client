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
} from "@mui/material";
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
  const [targetGender, setTargetGender] = useState("");
  const [targetAgeRange, setTargetAgeRange] = useState("");

  const typesAvaiable = [
    { name: "Bible Study", img: `/bible.png`, id: 1 },
    { name: "Coffee", img: `/coffee.png`, id: 2 },
    { name: "Pizza", img: `/pizza.png`, id: 3 },
    { name: "Church", img: `/church.png`, id: 4 },
    { name: "Movies", img: `/tv.png`, id: 5 },
    { name: "Fitness", img: `/fitness.png`, id: 6 },
    { name: "Pray", img: `/pray.png`, id: 7 },
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
      expirationDate: date,
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
        if (form.event.expirationDate) {
          const expirationDate = new Date(form.event.expirationDate);
          setDate(dayjs(expirationDate.toISOString().slice(0, 10)));
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
          console.log(form.event.type);
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
      <Typography variant="h3" gutterBottom>
        New Event
      </Typography>
      <FormGroup>
        <FormControl sx={{ m: 1 }}>
          <TextField
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ m: 1 }}>
          <TextField
            label="Description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ m: 1 }}>
          <DatePicker
            label="until"
            value={date}
            onChange={(newValue) => setDate(newValue)}
          />
        </FormControl>
        <FormControl sx={{ m: 1 }}>
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
        <FormControl sx={{ m: 1 }}>
          <InputLabel id="gender-select-label">Target Gender</InputLabel>
          <Select
            labelId="gender-select-label"
            id="gender-select"
            label="Target Gender"
            value={targetGender}
            onChange={(e) => setTargetGender(e.target.value)}
          >
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem value={"female"}>Female</MenuItem>
            <MenuItem value={"male"}>Male</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ m: 1 }}>
          <InputLabel id="age-select-label">Target Age Range</InputLabel>
          <Select
            labelId="age-select-label"
            id="age-select"
            label="Target Age Range"
            value={targetAgeRange}
            onChange={(e) => setTargetAgeRange(e.target.value)}
          >
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem value={"minor"}> less than 18</MenuItem>
            <MenuItem value={"young"}>Between 18 and 25</MenuItem>
            <MenuItem value={"adult "}>Between 26 and 40</MenuItem>
            <MenuItem value={"mature"}>Between 41 and 60</MenuItem>
            <MenuItem value={"older"}>More than 60</MenuItem>
          </Select>
        </FormControl>

        <Button
          sx={{ mt: 1 }}
          variant="contained"
          onClick={(e) => handleSubmit(e)}
        >
          Save
        </Button>
      </FormGroup>
    </>
  );
};
