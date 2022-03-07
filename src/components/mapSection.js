import React, {useCallback, useState,useRef} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { GoogleMap,Marker,InfoWindow,useLoadScript } from '@react-google-maps/api';
import mapStyles from "./mapStyles";
import { formatRelative } from "date-fns";
import usePlacesAutocomplete, { getGeocode, getLatLng,} from "use-places-autocomplete";
import {AddEventForm} from "./addEventForm"
import Modal from "./Modal"
import Backdrop from "./Backdrop"
import {setForm} from '../actions/globalStateActions'

import {Combobox,ComboboxInput,ComboboxPopover,ComboboxList, ComboboxOption,} from "@reach/combobox";
import "@reach/combobox/styles.css";

import { useAuth0 } from "@auth0/auth0-react";

const librariesArray=['places'];

const containerStyle = {
  width: '100vw',
  height: '100vh'
};
const center={
  lat:-34.90328,
  lng:-56.18816
}
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  // zoomControl: true,
};



export const MapSection = () => {
     //   const { user, logout} = useAuth0();

    
    const events = useSelector((state) =>(state.events ? state.events :null));
    const form = useSelector((state) =>(state.current.form ? state.current.form :null));
   // const [markers, setMarkers] = useState([]);
    const [selected, setSelected] = useState(null);
    const [eventToJoin, setEventToJoin] =useState(null);
    const dispatch= useDispatch();

  const onMapClick = useCallback((e) => {

    const position={ lat: e.latLng.lat(),
                      lng: e.latLng.lng()};
    dispatch(setForm({position}));
    // setMarkers((current) => [
    //   ...current,
    //   {
    //     id: markers.length+1,
    //     title: "Bible Study",
    //     lat: e.latLng.lat(),
    //     lng: e.latLng.lng(),
    //     description: "This is a bible study group that gathers on Monday Afternoon, everybody is welcome",

        
    //   },
    // ]); 
     
  

  }, []);
 

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(20);
  }, []);


   const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCwPyO0ICeErvK3sjNs8eyhpZMluSVGn5s',
    libraries:librariesArray,
  });

 
  return isLoaded ? (<>
     
      <Search panTo={panTo} />
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={20}
        options={options}
         onClick={onMapClick}
          onLoad={onMapLoad}
       
      >
    
       {events.map((marker) => (
          <Marker
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => {
              setSelected(marker);
            }}
            icon={{
              url: marker.img,
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(50, 60),
              size: new window.google.maps.Size(100,120),
            }}
          />
        ))}
         {form? <React.Fragment><Backdrop/><Modal form={<AddEventForm/>}/></React.Fragment> : <></>}
        {selected ? (
            <InfoWindow
              position={{ lat: selected.lat, lng: selected.lng }}
           
              onCloseClick={() => {
                setSelected(null);
                
              }}
             
              
            >
              <div  className='infoMarker'>
                 <h2>
               {selected.title}
                </h2>
                 <p>Description:  {selected.description}</p>
              
                {/* <p>Created {formatRelative(selected.time, new Date())}</p>  */}
                <button onClick={() => {
                    setEventToJoin(selected);
                  }}>
                  Join
                </button>
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
      <Combobox onSelect={handleSelect} className="combobox">
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
          className="inputcombobox"
        />
        <ComboboxPopover portal={false} className='pop_over' >
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption  className='pop_over_suggestion' key={id+description} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}
