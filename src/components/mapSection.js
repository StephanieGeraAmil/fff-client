import React, {useCallback, useState,useRef, useEffect} from 'react'
import { GoogleMap,Marker,InfoWindow,useLoadScript } from '@react-google-maps/api';
import mapStyles from "./mapStyles";
import { formatRelative } from "date-fns";
import usePlacesAutocomplete, { getGeocode, getLatLng,} from "use-places-autocomplete";

import {Combobox,ComboboxInput,ComboboxPopover,ComboboxList, ComboboxOption,} from "@reach/combobox";

const libraries=['places']

const containerStyle = {
  width: '80vw',
  height: '80vh'
};
const center={
  lat:10.90328,
  lng:-56.18816
}
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  // zoomControl: true,
};



export const MapSection = () => {

  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = React.useState(null);

  const onMapClick = useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);
 

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(16);
  }, []);


   const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCwPyO0ICeErvK3sjNs8eyhpZMluSVGn5s',
    libraries,
  });

  //  useEffect(()=>{ 
  //   //locate the map to where the user is 
    
  //   navigator.geolocation.getCurrentPosition(
  //         (position) => {
  //           console.log( 'in useEffect')
  //           panTo({
  //             lat: position.coords.latitude,
  //             lng: position.coords.longitude,
  //           });
  //         },
  //         //error
  //         () => null
  //       );

  // },[]);

 
  return isLoaded ? (<>
      {/* <Locate panTo={panTo} /> */}
      <Search panTo={panTo} />
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        options={options}
         onClick={onMapClick}
          onLoad={onMapLoad}
       
      >
    
       {markers.map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
            icon={{
              url: `/bible.png`,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(10, 12),
              scaledSize: new window.google.maps.Size(20, 24),
            }}
          />
        ))}
        {selected ? (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
              onCloseClick={() => {
                setSelected(null);
              }}
            >
              <div>
                <h2>
                Event
                </h2>
                 <p>Latitude {selected.lat}</p>
                  <p>Longitude {selected.lng}</p>
                <p>Created {formatRelative(selected.time, new Date())}</p>
              </div>
            </InfoWindow>
          ) : null}


      </GoogleMap>
   </>) : <></>
 
}




function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      //so we prefer results ner our location
      location: { lat: () => -34.90328, lng: () => -56.18816 },
      //3km
      radius: 300 * 1000,
    },
  });

  // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      panTo({ lat, lng });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />
        <ComboboxPopover >
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
