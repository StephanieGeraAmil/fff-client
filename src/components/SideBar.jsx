import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { EventForm } from "./forms/EventForm";
import { UserForm } from "./forms/UserForm";
import { Search } from "./Search";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, Drawer } from "@mui/material/";

export const SideBar = () => {
  const formSelector = (state) =>
    state.current.form ? state.current.form : null;
  const form = useSelector(formSelector);

  const [show, setShow] = useState(false);

  const toggleDrawer = (open) => (event) => {
    setShow(open);
  };

  const list = () => (
    <Box
      role="presentation"
      sx={{ height: "90%", width: "80%", margin: "auto" }}
    >
      {form && (form.type === "AddEvent" || form.type === "EditEvent") ? (
        <EventForm />
      ) : (
        <></>
      )}
      {form && form.type === "AddUser" ? <UserForm /> : <></>}
      {form && form.type === "Search" ? <Search fullWidth /> : <></>}
    </Box>
  );
  useEffect(() => {
    if (form !== null) {
      setShow(true);
    }
  }, [form]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <>
        <Drawer
          PaperProps={{
            sx: {
              width: "30%",
              position: "fixed",
              top: 0,
              left: 40,
              m: 0,
              zIndex: 10,
            },
          }}
          anchor={"left"}
          open={show}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </>
    </LocalizationProvider>
  );
};
