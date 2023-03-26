import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setForm, unsetForm } from "../../actions/globalStateActions";
import { Button, Typography } from "@mui/material";
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
      {form.event.chatLink && (
        <Button variant="contained" onClick={clickGroupChatHandler}>
          Join Group Chat
        </Button>
      )}
      {userLogged &&
        form.event.creator &&
        userLogged.id === form.event.creator && (
          <>
            <Button onClick={clickEditHandler}>Edit</Button>
            <Button onClick={clickDeleteHandler}>Delete</Button>
          </>
        )}
    </>
  );
};
