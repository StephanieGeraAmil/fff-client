import React, { useCallback, useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
} from "@react-google-maps/api";
import mapStyles from "./MapStyles";
import { formatRelative } from "date-fns";

import { setForm } from "../../actions/globalStateActions";
import { Card } from "@mui/material";
import { Button } from "@mui/material";
import { useSocket } from "../../hooks/useSocket";
//import {  deleteEvent } from "../actions/eventActions";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  // zoomControl: true,
};
const mapRef = { current: null };
export const CenterMap = ({ lat, lng }) => {
  mapRef.current.panTo({ lat, lng });
  mapRef.current.setZoom(19);
};

export const MapSection = () => {
  const eventSelector = (state) => (state.events ? state.events : null);
  const events = useSelector(eventSelector);
  const userLoggedSelector = (state) =>
    state.current.user ? state.current.user : null;
  const userLogged = useSelector(userLoggedSelector);

  const dispatch = useDispatch();

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [mapCenter, setMapCenter] = useState({
    lat: -32.90328,
    lng: -52.18816,
  });
  const [userInfo, setUserInfo] = useState({
    country: "Uruguay",
    city: "Montevideo",
  });
  useSocket({ userInfo });

  const onMapClick = useCallback(
    (e) => {
      setSelectedEvent(null); // to be sure the state is clean to save the event being created
      if (userLogged) {
        const positionSelected = {
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
        };
        dispatch(setForm({ positionSelected, type: "AddEvent" }));
      }
    },
    [userLogged]
  );

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  // I need the ade of the loged user to determine which events are accesible to it
  const getAgeOf = (birthDate) => {
    let age;
    const birth = new Date(birthDate);
    const now = new Date();
    const diff_months = now.getMonth() - birth.getMonth();
    if (diff_months < 0) {
      age = now.getFullYear() - 1 - birth.getFullYear();
    } else {
      if (diff_months === 0) {
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
    if (userLogged) {
      if (!userLogged.gender || !userLogged.birthDate) {
        dispatch(setForm({ type: "AddUser" }));
      }
      // if (userLogged.gender)
      //   setUserInfo({ ...userInfo, gender: userLogged.gender });
      // if (userLogged.birthDate)
      //   setUserInfo({ ...userInfo, age: getAgeOf(userLogged.birthDate) });
    }
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
  }, []);

  return (
    <>
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
            key={marker.id}
            position={{
              lat: parseFloat(marker.lat),
              lng: parseFloat(marker.lng),
            }}
            onClick={() => {
             setSelectedEvent(marker);
            }}
            icon={{
              url: marker.img,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 20),
              size: new window.google.maps.Size(30, 40),
            }}
          />
        ))}

        {selectedEvent ? (
          <InfoWindow
            position={{ lat: selectedEvent.lat, lng: selectedEvent.lng }}
            onCloseClick={() => {
              setSelectedEvent(null);
            }}
          >
            <div>
              <h2>{selectedEvent.title}</h2>

              <p>Description: {selectedEvent.description}</p>
              <p>
                Created{" "}
                {formatRelative(new Date(selectedEvent.createdAt), Date.now())}
              </p>
              {userLogged && (
                <>
                  {/* <Button
                    onClick={() => {
                      // let update = {};
                      // if (selected.hasTheUser) {
                      //   update = {
                      //     ...selected,
                      //     userToAddOrRemove: userLogged._id,
                      //     task: "deleteUser",
                      //   };
                      // } else {
                      //   update = {
                      //     ...selected,
                      //     userToAddOrRemove: userLogged._id,
                      //     task: "addUser",
                      //   };
                      // }
                      // dispatch(updateUserInEvent(update));
                      setSelectedEvent(null);
                      handleClose();
                    }}
                  >
                    {selectedEvent.hasTheUser ? "Leave" : "Join"}
                  </Button> */}

                  {selectedEvent.creator === userLogged.id && (
                    <>
                      <Button
                        onClick={() => {
                          dispatch(
                            setForm({ type: "EditEvent", event: selectedEvent })
                          );
                          setSelectedEvent(null);
                        }}
                      >
                        Edit
                      </Button>

                      <Button
                        onClick={() => {
                          // dispatch(deleteEvent(selected._id));
                          setSelectedEvent(null);
                        }}
                      >
                        Delete
                      </Button>
                    </>
                  )}
                </>
              )}
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </>
  );
};
