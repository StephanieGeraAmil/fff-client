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
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  Grid,
  Switch,
  Container,
  Box,
} from "@mui/material";
import dayjs from "dayjs";
import Woman2OutlinedIcon from "@mui/icons-material/Woman2Outlined";
import Man2OutlinedIcon from "@mui/icons-material/Man2Outlined";

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
        User Info
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <FormControl sx={{ p: 1 , width: "100%"}}>
            <TextField
              label="Name"
              variant="standard"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              m: 1,
            }}
          >
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: 100, fontSize: 15.5 }}
            >
              Gender
            </Typography>

            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
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
              </RadioGroup>
            </FormControl>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ p: 1 , width: "100%"}}>
            <DatePicker
              label="Birth Date"
              value={date}
              onChange={(newValue) => setDate(newValue)}
              disableCloseOnSelect={false}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <Button
            sx={{ mt: 1 }}
            variant="contained"
            onClick={handleSubmit}
             disabled = {!name||!gender||!date}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
