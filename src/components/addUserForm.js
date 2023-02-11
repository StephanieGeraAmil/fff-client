import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../actions/userActions";
import { updateUser } from "../actions/userActions";
import { unsetForm } from "../actions/globalStateActions";
import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useAuth0 } from "@auth0/auth0-react";

import "react-datetime/css/react-datetime.css";
import Stack from "react-bootstrap/esm/Stack";

export const AddUserForm = () => {
  const form = useSelector((state) =>
    state.current.form ? state.current.form : null
  );
  const userLogged = useSelector((state) =>
    state.current.user ? state.current.user : null
  );
  const dispatch = useDispatch();

  const now = new Date();
  const [gender, setGender] = useState("Female");
  const [name, setName] = useState("");
  const [day, setDay] = useState(now.getDate().toString());
  const [month, setMonth] = useState(now.getMonth().toString());
  const [year, setYear] = useState(now.getFullYear().toString());
  const [yearValues, setYearValues] = useState([]);
  const [dayValues, setDayValues] = useState([]);

  const { user } = useAuth0();
  const generateArrayOfDays = () => {
    const daysValues = [];
    let dayNum;

    if (
      (month === "0") |
      (month === "2") |
      (month === "4") |
      (month === "6") |
      (month === "7") |
      (month === "9") |
      (month === "11")
    ) {
      dayNum = 31;
    } else if (
      (month === "3") |
      (month === "5") |
      (month === "8") |
      (month === "10")
    ) {
      dayNum = 30;
    } else {
      const isLeap = new Date(year, 1, 29).getMonth() == 1;
      isLeap ? (dayNum = 29) : (dayNum = 28);
    }
    for (let i = 1; i <= dayNum; i++) {
      daysValues.push(i);
    }
    setDayValues(daysValues);
  };

  const monthVaules = [
    { value: 0, name: "January" },
    { value: 1, name: "February" },
    { value: 2, name: "March" },
    { value: 3, name: "April" },
    { value: 4, name: "May" },
    { value: 5, name: "June" },
    { value: 6, name: "July" },
    { value: 7, name: "August" },
    { value: 8, name: "September" },
    { value: 9, name: "October" },
    { value: 10, name: "November" },
    { value: 11, name: "December" },
  ];

  const generateArrayOfYears = () => {
    const max = new Date().getFullYear();
    const min = max - 109;
    const years = [];
    for (let i = max; i >= min; i--) {
      years.push(i);
    }
    setYearValues(years);
  };

  useEffect(() => {
    generateArrayOfDays();
  }, [month, year]);

  useEffect(() => {
    generateArrayOfDays();
    generateArrayOfYears();
    if (userLogged) {
      //display the values already saved from the user
      if (userLogged.birthDate) {
        const birthdt = new Date(userLogged.birthDate);
        setDay(birthdt.getDate().toString());
        setMonth(birthdt.getMonth().toString());
        setYear(birthdt.getFullYear().toString());
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
      birthDate: new Date(year, month, day),
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
      <Modal.Header closeButton>
        <Modal.Title>User Info</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form className="mt-5">
          <Form.Control
            className="mb-3"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Form.Select
            className="mb-3"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          >
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
          </Form.Select>
          <Stack direction="horizontal" gap={3} className="mb-3">
            <Form.Select
              onChange={(e) => {
                setDay(e.target.value);
              }}
              value={day}
            >
              {dayValues.map((day) => {
                return <option key={day}>{day}</option>;
              })}
            </Form.Select>
            <Form.Select
              onChange={(e) => {
                setMonth(e.target.value);
              }}
              value={month}
            >
              {monthVaules.map((m) => {
                return (
                  <option key={m.value} value={m.value}>
                    {m.name}
                  </option>
                );
              })}
            </Form.Select>
            <Form.Select
              onChange={(e) => {
                setYear(e.target.value);
              }}
              value={year}
            >
              {yearValues.map((year) => {
                return <option key={year}>{year}</option>;
              })}
            </Form.Select>
          </Stack>
          <Button
            variant="secondary"
            size="lg"
            className="mb-3"
            onClick={(e) => handleSubmit(e)}
          >
            Save
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
};
