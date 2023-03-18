import { useEffect, useRef } from "react";

export function useSocket({ userInfo }) {
  const socket = useRef();
  const { REACT_APP_WS_BACKEND_URL } = process.env;
  //const dispatch= useDispatch();

  const onConnOpen = () => {
    socket.current.send(
      JSON.stringify({
        action: "addConnectionInfo",
        location: { country: "Uruguay", city: "Montevideo" },
      })
    );
    socket.current.send(
      JSON.stringify({
        action: "eventCrud",
        method: "read",
        // queyParams: userInfo,
      })
    );
  };
  // const onNewEvent = (event) => {
  //   dispatch(addEvent(event));
  //   console.log(event);
  // };
  // const onUpdateEvent = (event) => {
  //   dispatch(updEvent(event));
  //   console.log(event);
  // };

  // const onListEvents = (data) => {
  //    console.log(data);
  //    dispatch(setEvents(data));

  // };
  const onListEvents = (data) => console.log(JSON.parse(data));

  // socket.current.addEventListener("newEvent", (data) => onNewEvent);
  // socket.current.addEventListener("updatedEvent", (data) => onUpdateEvent);
  useEffect(() => {
    if (!socket.crurent) {
      socket.current = new WebSocket(REACT_APP_WS_BACKEND_URL);
      socket.current.addEventListener("open", onConnOpen);
      socket.current.addEventListener("listEvents", onListEvents);
    }
    return () => {
      socket.current.removeEventListener("open", onConnOpen);
      socket.current.removeEventListener("listEvents", onListEvents);
    };
  }, []);
  useEffect(()=>{console.log(socket.current)},[socket.current])

  const addEvent = (data) =>
    socket.current.send(
      JSON.stringify({
        action: "eventCrud",
        method: "create",
        event: data,
      })
    );

  const updateEvent = (data) =>
    socket.current.send(
      JSON.stringify({
        action: "eventCrud",
        method: "update",
        event: data,
      })
    );
  return { addEvent, updateEvent };
}
