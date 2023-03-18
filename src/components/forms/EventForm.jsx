import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { unsetForm } from "../../actions/globalStateActions";
import { addEvent, updateEvent } from "../../actions/eventActions";
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

export const EventForm = ({ actionMethod }) => {
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
    const eventData = {
      title: title,
      description: description,
      type: typesAvaiable[0].name,
      img: "." + typesAvaiable[0].img,
      lat: form.positionSelected.lat,
      lng: form.positionSelected.lng,
      creator: userLogged._id,
      expirationDate: date,
    };
    if (form === "AddEvent") dispatch(addEvent(eventData));
    else if (form === "EditEvent") dispatch(updateEvent(eventData));
    dispatch(unsetForm());
  };
  useEffect(() => {
    if (form === "EditEvent") {
      //display the values already saved on the event
      if (form.event) {
        if (form.event.expirationDate) {
          const expirationDate = new Date(form.event.expirationDate);
          setDate(dayjs(form.event.expirationDate.toISOString().slice(0, 10)));
        }
        if (form.event.title) {
          setTitle(form.event.title);
        }
        if (form.event.description) {
          setDescription(form.event.description);
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
          <Select labelId="age-select-label"
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
