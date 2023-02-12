import React, { useCallback, useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";
import mapStyles from "./mapStyles";
import { formatRelative } from "date-fns";
import { getGeocode, getLatLng } from "use-places-autocomplete";
import { AddEventForm } from "./addEventForm";
import { EditEventForm } from "./editEventForm";
import { AddUserForm } from "./addUserForm";
import { Search } from "./search";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import { setForm } from "../actions/globalStateActions";
import { updateUserInEvent, deleteEvent } from "../actions/eventActions";
import Button from "react-bootstrap/Button";
import { setEvents, addEvent, updEvent } from "../actions/eventActions";

const libraries = ["places"];

const containerStyle = {
  width: "100vw",
  height: "100vh",
};
// const center = {
//   lat: -34.90328,
//   lng: -56.18816,
// };
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  // zoomControl: true,
};

export const MapSection = () => {
  const eventSelector = (state) => (state.events ? state.events : null);
  const events = useSelector(eventSelector);
  const formSelector = (state) =>
    state.current.form ? state.current.form : null;
  const form = useSelector(formSelector);
  const userLoggedSelector = (state) =>
    state.current.user ? state.current.user : null;
  const userLogged = useSelector(userLoggedSelector);
  const dispatch = useDispatch();
  const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;
  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(true);
  const [mapCenter, setMapCenter] = useState({
    lat: -34.90328,
    lng: -56.18816,
  });
  const socket = useRef();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onMapClick = useCallback(
    (e) => {
      setSelected(null);

      if (userLogged) {
        const positionSelected = {
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        };
        dispatch(setForm({ positionSelected, type: "AddEvent" }));
        handleShow();
      }
    },
    [userLogged]
  );

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(19);
  }, []);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const centerMapOnSearch = async (address) => {
    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      setMapCenter({ lat, lng });
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const onEventsLoad = (data) => {
    dispatch(setEvents(data));
  };

  const onConnOpen = () => {
    socket.current.send(
      JSON.stringify({
        action: "addConnectionInfo",
        location: { country: "Uruguay", city: "Montevideo" },
      })
    );
  };
  
  const getAgeOf = (birthDate) => {
    let age;
    const birth = new Date(birthDate);
    const now = new Date();
    const diff_months = now.getMonth() - birth.getMonth();
    if (diff_months < 0) {
      age = now.getFullYear() - 1 - birth.getFullYear();
    } else {
      if (diff_months == 0) {
        const diff_days = now.getDate() - birth.getDate();
        if (diff_days < 0) {
          age = now.getFullYear() - 1 - birth.getFullYear();
        } else {
          age = now.getFullYear() - birth.getFullYear();
        }
      } else {
        age = now.getFullYear() - birth.getFullYear();
      }
    }
    return age;
  };
  useEffect(() => {
    const queryParams = {
      country: "Uruguay",
      city: "Montevideo",
    };
    if (userLogged) {
      if (!userLogged.gender || !userLogged.birthDate) {
        dispatch(setForm({ type: "AddUser" }));
      }
      if (userLogged.gender) queryParams.gender = userLogged.gender;
      if (userLogged.birthDate)
        queryParams.age = getAgeOf(userLogged.birthDate);
      console.log(queryParams);
    }
    // console.log(userLogged);
    //     console.log(queryParams);
    // socket.current.addEventListener("getEventsAround", (data) => {
    //   dispatch(setEvents(data));
    // });
    // socket.current.send("eventAround", {});
  }, [userLogged]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let initialLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setMapCenter(initialLocation);
      });
    }
    if (!socket.current) {
      socket.current = new WebSocket(process.env.REACT_APP_WS_BACKEND_URL);
      socket.current.addEventListener("open", onConnOpen);

      //       socket.current.addEventListener("getEventsAround",(data)=> { dispatch(setEvents(data));});
      //     socket.current.send("eventAround",{country:"Uruguay",city:"Montevideo"});
      //      socket.current.addEventListener ("new-event",  (event)  =>{ dispatch(addEvent(event)); });
      //  socket.current.addEventListener("event-updated",  (event)  =>{ dispatch(updEvent(event)); });

      // socket.current.onmessage = onMessage;
      // socket.current.onclose = onConnClose;
    }
  }, []);

  return isLoaded ? (
    <>
      <Search panTo={panTo} />
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={19}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {events.map((marker) => (
          <Marker
            key={marker._id}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
            icon={{
              url: marker.img,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 20),
              size: new window.google.maps.Size(30, 40),
            }}
          />
        ))}
        {form ? (
          form.type == "AddEvent" && (
            <Modal show={show} onHide={handleClose}>
              {" "}
              <AddEventForm socket={socket} />{" "}
            </Modal>
          )
        ) : (
          <></>
        )}
        {form ? (
          form.type == "EditEvent" && (
            <Modal show={show} onHide={handleClose}>
              {" "}
              <EditEventForm socket={socket} />{" "}
            </Modal>
          )
        ) : (
          <></>
        )}

        {form ? (
          form.type == "AddUser" && (
            <Modal show={show} onHide={handleClose}>
              {" "}
              <AddUserForm />{" "}
            </Modal>
          )
        ) : (
          <></>
        )}

        {selected ? (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            onCloseClick={() => {
              setSelected(null);
            }}
          >
            <Container>
              <h2>{selected.title}</h2>

              <p>Description: {selected.description}</p>
              <p>
                Created {formatRelative(new Date(selected.date), Date.now())}
              </p>
              {userLogged && (
                <>
                  <Button
                    onClick={() => {
                      let update = {};
                      if (selected.hasTheUser) {
                        update = {
                          ...selected,
                          userToAddOrRemove: userLogged._id,
                          task: "deleteUser",
                        };
                      } else {
                        update = {
                          ...selected,
                          userToAddOrRemove: userLogged._id,
                          task: "addUser",
                        };
                      }
                      dispatch(updateUserInEvent(update));
                      setSelected(null);
                      handleClose();
                    }}
                  >
                    {selected.hasTheUser ? "Leave" : "Join"}
                  </Button>

                  {selected.creator === userLogged._id && (
                    <>
                      <Button
                        onClick={() => {
                          handleShow();
                          dispatch(
                            setForm({ type: "EditEvent", event: selected })
                          );
                          setSelected(null);
                        }}
                      >
                        Edit
                      </Button>

                      <Button
                        onClick={() => {
                          dispatch(deleteEvent(selected._id));
                          setSelected(null);
                          handleClose();
                        }}
                      >
                        Delete
                      </Button>
                    </>
                  )}
                </>
              )}
            </Container>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </>
  ) : (
    <></>
  );
};
