import React, {useCallback, useState,useRef, useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { GoogleMap,Marker,InfoWindow,useLoadScript } from '@react-google-maps/api';
import mapStyles from "./mapStyles";
import { formatRelative } from "date-fns";
import usePlacesAutocomplete, { getGeocode, getLatLng,} from "use-places-autocomplete";
import {AddEventForm} from "./addEventForm"
import {AddUserForm} from "./addUserForm"
import {Search} from "./search"
import Modal from "react-bootstrap/Modal"
import Container from "react-bootstrap/Container"
// import Backdrop from "./Backdrop"
import {setForm} from '../actions/globalStateActions'
import {getEvents, getEventsWithUserBelongingInfo,updateUserInEvent} from '../actions/eventActions'

import {Combobox,ComboboxInput,ComboboxPopover,ComboboxList, ComboboxOption,} from "@reach/combobox";
import "@reach/combobox/styles.css";
import Button from 'react-bootstrap/Button';


const libraries=['places'];

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
    const eventSelector=(state) =>(state.events ? state.events :null);
    const events = useSelector(eventSelector);
    const formSelector=(state) =>(state.current.form ? state.current.form :null);
    const form = useSelector(formSelector);
    const userLoggedSelector=(state) =>(state.current.user ? state.current.user :null);
    const userLogged = useSelector(userLoggedSelector);
    const dispatch= useDispatch();
    const { REACT_APP_GOOGLE_MAPS_API_KEY } = process.env;
    const [selected, setSelected] = useState(null);

    /// modals
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  const onMapClick = useCallback((e) => {
    setSelected(null);
   
    if(userLogged){
        const position={  
                          lat: e.latLng.lat(),
                          lng: e.latLng.lng()
                        };
        dispatch(setForm({position, type:'AddEvent'}));
        handleShow();
    }
  }, [userLogged]);
 

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

  useEffect(()=>{
        handleShow();
     
    if(userLogged){
      
      dispatch(getEventsWithUserBelongingInfo(userLogged._id));
    }else{
       dispatch(getEvents());
    }
  },[userLogged])

 
  return isLoaded ? (<>
     
      <Search panTo={panTo}/>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
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
                  size: new window.google.maps.Size(30,40),
                }}
              />
            ))}
            {form? form.type=='AddEvent'&& <Modal  show={show} onHide={handleClose}> <AddEventForm/></Modal> : <></> }
            {form? form.type=='AddUserInfo'&& <Modal show={show} onHide={handleClose}> <AddUserForm/></Modal>: <></> }
            {form? form.type=='AddUser'&& <Modal show={show} onHide={handleClose}><AddUserForm/></Modal> : <></> } 
            {selected ? (
                <InfoWindow
                  position={{ lat: selected.lat, lng: selected.lng}}       
                  onCloseClick={() => {
                    setSelected(null);
                  }}
                >   
              
                    <Container>
                    <h2>
                       {selected.title}
                    </h2> 
                   
                    <p>Description:  {selected.description}</p>
                    <p>Created {formatRelative(new Date(selected.date),Date.now())}</p> 
                    {userLogged&&<Button onClick={() => {
                                      let update={};
                                          if(selected.hasTheUser){
                                            update={...selected,userToAddOrRemove:userLogged._id, task:'deleteUser'}
                                          
                                          }else{
                                            update={...selected,userToAddOrRemove:userLogged._id, task:'addUser'}
                                         }
                                          dispatch(updateUserInEvent(update)); 
                                          setSelected(null);  
                                          handleClose();
                                      }
                                    }>
                                    { selected.hasTheUser?'Leave':'Join'}
                                    </Button>}
                    {/* </Modal.Body> */}
                  {/* </Modal> */}
                  </Container>
                </InfoWindow>
              ) : null}
      </GoogleMap>
      
  </>) : <></>
}


// function Search({ panTo }) {
//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutocomplete({
//     requestOptions: {
//       //so we prefer results ner our location
//       location: { lat: () => -34.90328, lng: () => -56.18816 },
//       //3km
//       radius: 300 * 1000,
//     },
//   });

//   // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

//   const handleInput = (e) => {
//     setValue(e.target.value);
//   };

//   const handleSelect = async (address) => {
//     setValue(address, false);
//     clearSuggestions();
//     try {
//       const results = await getGeocode({ address });
//       const { lat, lng } = await getLatLng(results[0]);
//       panTo({ lat, lng });
//     } catch (error) {
//       console.log("Error: ", error);
//     }
//   };

//   return (
//     <div className="search">
//       <Combobox onSelect={handleSelect} className="combobox">
//         <ComboboxInput
//           value={value}
//           onChange={handleInput}
//           disabled={!ready}
//           placeholder="Search your location"
//           className="inputcombobox"
//         />
//         <ComboboxPopover portal={false} className='pop_over' >
//           <ComboboxList>
//             {status === "OK" &&
//               data.map(({ id, description }) => (
//                 <ComboboxOption  className='pop_over_suggestion' key={id+description} value={description} />
//               ))}
//           </ComboboxList>
//         </ComboboxPopover>
//       </Combobox>
//     </div>
//   );
// }
