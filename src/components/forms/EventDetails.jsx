import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setForm, unsetForm } from "../../actions/globalStateActions";
import { Button, Typography, Box} from "@mui/material";
import { deleteEventOnBack } from "../../hooks/useSocket";
import { formatRelative } from "date-fns";

export const EventDetails = () => {
  const form = useSelector((state) =>
    state.current.form ? state.current.form : null
  );
  const userLogged = useSelector((state) =>
    state.current.user ? state.current.user : null
  );

  const dispatch = useDispatch();

  const [date, setDate] = useState("");
  const [repetition, setRepetition] = useState(false);

  useEffect(() => {
    if (form.event) {
      if (form.event.date && form.event.date !== null) {
        setRepetition(false);
        setDate(form.event.date.slice(0, 10));
      } else {
        setRepetition(true);
      }
    }
  }, []);

  const clickGroupChatHandler = () => {
    window.location.replace(form.event.chatLink);
  };
  const clickWebLinkHandler = () => {
    window.location.replace(form.event.webLink);
  };
  const clickDeleteHandler = () => {
    deleteEventOnBack(form.event.id);
    dispatch(unsetForm());
  };
  const clickEditHandler = () => {
    dispatch(setForm({ type: "EditEvent", event: form.event }));
  };

  return (
    <>
      <Typography variant="h2" gutterBottom>
        {form.event.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {form.event.description}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {form.event.type} event
      </Typography>
      {!repetition && (
        <Typography variant="body2" gutterBottom>
          Date: {date}
        </Typography>
      )}

      <Typography variant="body1" gutterBottom>
        Event for{" "}
        {form.event.targetGender == "all"
          ? "Males and Females"
          : form.event.targetGender.concat("s")}{" "}
        with ages between {form.event.targetAgeRange[0]} and{" "}
        {form.event.targetAgeRange[1]}
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        Created: {formatRelative(new Date(form.event.createdAt), Date.now())}
      </Typography>
    
      <Box  display="flex" justifyContent="flex-start" alignItems="center" gap={2} mt={2}>
        {form.event.chatLink && (
          <Button variant="contained" onClick={clickGroupChatHandler}
          sx={{
            transition: "border-color 0.3s, color 0.3s, transform 0.3s",
            "&:hover": {
              backgroundColor: "#555", 
              color: "#FFF",  
              transform: "scale(1.05)",  
              boxShadow: "0 0 10px #fff",  
            },}}>
            Join Group Chat
          </Button>
        )}
        {form.event.webLink && (
          <Button variant="contained" onClick={clickWebLinkHandler}
          sx={{
            transition: "border-color 0.3s, color 0.3s, transform 0.3s",
            "&:hover": {
              backgroundColor: "#555", 
              color: "#FFF",  
              transform: "scale(1.05)",  
              boxShadow: "0 0 10px #fff",  
            },}}>
            Check out the web
          </Button>
        )}
      </Box>
      {userLogged &&
        form.event.creator &&
        userLogged.id === form.event.creator && (
          <Box mt={2}>
            <Button variant="outlined" onClick={clickEditHandler} 
             sx={{
              mr: 2,
              transition: "border-color 0.3s, color 0.3s, transform 0.3s",
              "&:hover": {
                borderColor: "white",
                color:"white",
                transform: "scale(1.05)",
              },}}
            >
              Edit
            </Button>
            <Button variant="outlined" onClick={clickDeleteHandler}
             sx={{
              transition: "border-color 0.3s, color 0.3s, transform 0.3s",
              "&:hover": {
                borderColor: "white",
                color:"white",
                transform: "scale(1.05)",
              },}}
            >
              Delete
            </Button>
          </Box>
        )}
    </>
  );
};
