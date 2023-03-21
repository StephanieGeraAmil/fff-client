import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEvents, addEvent, updateEvent } from "../actions/eventActions";

export function useSocket({ userInfo }) {
  const socket = useRef();
  const { REACT_APP_WS_BACKEND_URL } = process.env;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!socket.current) {
      socket.current = new WebSocket(REACT_APP_WS_BACKEND_URL);

      socket.current.onopen = (event) => {
        console.log("OnConnOpen");
        socket.current.send(
          JSON.stringify({
            action: "addConnectionInfo",
            location: { country: "Uruguay", city: "Montevideo" },
          })
        );
        socket.current.send(
          JSON.stringify({
            action: "getListEvents",

            // queyParams: userInfo,
          })
        );
      };

      socket.current.onmessage = function (event) {
        try {
          const json = JSON.parse(event.data);
          const message = JSON.parse(json);

          if (message.action && message.data) {
            console.log(message.action, message.data);
            switch (message.action) {
              case "listEvents":
                return dispatch(setEvents(message.data));
              case "addEvent":
                return dispatch(addEvent(message.data));
              case "updateEvent":
                return dispatch(updateEvent(message.data));
            }
          }
        } catch (err) {
          console.log(err);
        }
      };
    }
    return () => {};
  }, []);

  const addEvent = (data) =>
    socket.current.send(
      JSON.stringify({
        action: "addEvent",
        event: data,
      })
    );

  const updateEvent = (data) =>
    socket.current.send(
      JSON.stringify({
        action: "updateEvent",
        event: data,
      })
    );
  return { addEvent, updateEvent };
}
