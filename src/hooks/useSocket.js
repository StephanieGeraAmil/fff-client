import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEvents, addEvent, updateEvent , deleteEvent} from "../actions/eventActions";

const socket = { current: null };
export const useSocket = () => {
  const { REACT_APP_WS_BACKEND_URL } = process.env;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!socket.current) {
      socket.current = new WebSocket(REACT_APP_WS_BACKEND_URL);
      socket.current.onopen = (event) => {
        socket.current.send(
          JSON.stringify({
            action: "addConnectionInfo",
            location: { country: "Uruguay", city: "Montevideo" },
          })
        );
        socket.current.send(
          JSON.stringify({
            action: "getListEvents",

            // queyParams: params,
          })
        );
      };

      socket.current.onmessage = function (event) {
        try {
          const json = JSON.parse(JSON.parse(event.data));
          if (json.action && json.data) {
            switch (json.action) {
              case "listEvents":
                return dispatch(setEvents(json.data));
              case "newEvent":
                return dispatch(addEvent(json.data));
              case "updatedEvent":
                return dispatch(updateEvent(json.data));
                 case "deletedEvent":
                return dispatch(deleteEvent(json.data));
            }
          }
        } catch (err) {
          console.log(err);
        }
      };
    }
    return () => {};
  }, []);

  return;
};
export const addEventOnBack = (data) => {
  socket.current.send(
    JSON.stringify({
      action: "addEvent",
      event: data,
    })
  );
};
export const updateEventOnBack = (data) => {
  socket.current.send(
    JSON.stringify({
      action: "updateEvent",
      event: data,
    })
  );
};
export const deleteEventOnBack = (data) => {
  socket.current.send(
    JSON.stringify({
      action: "deleteEvent",
      event: data,
    })
  );
};
