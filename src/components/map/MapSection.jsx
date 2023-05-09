import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoogleMap, Marker } from "@react-google-maps/api";
import mapStyles from "./MapStyles";
import { setForm } from "../../actions/globalStateActions";
import { useSocket } from "../../hooks/useSocket";
import { Box } from "@mui/material/";

const containerStyle = {
   width: "100vw",
  height: "100vh",
  margin:0,
   overflow: "hidden",
};

let options = {
  styles: mapStyles,
  disableDefaultUI: true,
  minZoom: 12,
  maxZoom: 19,
  zoomControl: true,

};
const mapRef = { current: null };

export const CenterMap = ({ lat, lng }) => {
  mapRef.current.panTo({ lat, lng });
  mapRef.current.setZoom(17);
};

export const MapSection = () => {
  const eventSelector = (state) => (state.events ? state.events : null);
  const events = useSelector(eventSelector);
  const userLoggedSelector = (state) =>
    state.current.user ? state.current.user : null;
  const userLogged = useSelector(userLoggedSelector);
  const filtersSelector = (state) =>
    state.current.filters ? state.current.filters : null;
  const filters = useSelector(filtersSelector);
  const formSelector = (state) =>
    state.current.form ? state.current.form : null;
  const form = useSelector(formSelector);

  const dispatch = useDispatch();
  const [eventsToShow, setEventsToShow] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [mapCenter, setMapCenter] = useState({
    lat: -32.90328,
    lng: -52.18816,
  });
  const [userInfo, setUserInfo] = useState({
    country: "Uruguay",
    city: "Montevideo",
  });
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
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

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  useEffect(() => {
    if (filters) {
      setEventsToShow(
        events.filter(
          (event) =>
            (event.targetGender === filters.gender ||
              event.targetGender === "all") &&
            event.targetAgeRange[0] <= filters.age &&
            event.targetAgeRange[1] >= filters.age
        )
      );
    } else {
      setEventsToShow(events);
    }
  }, [filters, events]);

  useEffect(() => {
    if (selectedEvent) {
      dispatch(setForm({ type: "EventDetails", event: selectedEvent }));
    }
  }, [selectedEvent]);

  useEffect(() => {
    if (userLogged && !form) {
      if (!userLogged.gender || !userLogged.birthDate) {
        dispatch(setForm({ type: "AddUser" }));
      }
    }
  }, [userLogged,form]);

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
    useEffect(() => {
    if (screenSize.width < 500) {
      //not web
      dispatch(setForm({ type: "Search" }));
    }
  }, [screenSize]);

  return (
    <Box
      sx={{
        width: 1,
        height: 1,
        overflow: "hidden",
      }}
    
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter}
        zoom={17}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {eventsToShow.map((marker) => (
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
      </GoogleMap>
    </Box>
  );
};
