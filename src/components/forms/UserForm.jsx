import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  unsetForm,
  createUser,
  updateUser,
} from "../../actions/globalStateActions";
import { DatePicker } from "@mui/x-date-pickers";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Button,
  Stack,
  TextField,
  Select,
  MenuItem,
  Typography,
  InputLabel,
  FormControl,
  FormGroup,
} from "@mui/material";
import dayjs from "dayjs";

export const UserForm = () => {
  const form = useSelector((state) =>
    state.current.form ? state.current.form : null
  );
  const userLogged = useSelector((state) =>
    state.current.user ? state.current.user : null
  );
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState("");

  const { user } = useAuth0();

  useEffect(() => {
    if (userLogged) {
      //display the values already saved on the user
      if (userLogged.birthDate) {
        const birthDate = new Date(userLogged.birthDate);
        setDate(dayjs(userLogged.birthDate.toISOString().slice(0, 10)));
      }
      if (userLogged.gender) {
        setGender(userLogged.gender);
      }
      if (userLogged.name) {
        setName(userLogged.name);
      }
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const usr = {
      email: user.email,
      name: name,
      gender: gender,
      birthDate: date,
    };
    if (userLogged) {
      usr.id = userLogged.id;
      dispatch(updateUser(usr));
    } else {
      dispatch(createUser(usr));
    }
    dispatch(unsetForm());
  };

  return (
    <>
      <Typography variant="h2" gutterBottom>
        New Event
      </Typography>
      <FormGroup>
        <FormControl sx={{ p: 1 }}>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>
        <FormControl sx={{ p: 1 }}>
          <Select
            value={gender}
            label="Gender"
            onChange={(e) => setGender(e.target.value)}
          >
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Male"}>Male</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ p: 1 }}>
          <DatePicker
            label="Birth Date"
            value={date}
            onChange={(newValue) => setDate(newValue)}
          />
        </FormControl>
      </FormGroup>

      <Button
        sx={{ mt: 1 }}
        variant="contained"
        onClick={(e) => handleSubmit(e)}
      >
        Save
      </Button>
    </>
  );
};
