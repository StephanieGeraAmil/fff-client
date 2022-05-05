import React, {useCallback, useState,useRef, useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { GoogleMap,Marker,InfoWindow,useLoadScript } from '@react-google-maps/api';
import mapStyles from "./mapStyles";
import { formatRelative } from "date-fns";
import { getGeocode, getLatLng,} from "use-places-autocomplete";
import {AddEventForm} from "./addEventForm"
import {EditEventForm} from "./editEventForm"
import {AddUserForm} from "./addUserForm"
import {Search} from "./search"
import Modal from "react-bootstrap/Modal"
import Container from "react-bootstrap/Container"
import {setForm} from '../actions/globalStateActions'
import {updateUserInEvent,deleteEvent} from '../actions/eventActions'
import Button from 'react-bootstrap/Button';
import {io} from 'socket.io-client';
import {setEvents, addEvent}  from '../actions/eventActions';



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
    const [show, setShow] = useState(false);
    const [skt, setSkt] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const onMapClick = useCallback((e) => {
      setSelected(null);
    
      if(userLogged){
          const positionSelected={  
                            lat: e.latLng.lat(),
                            lng: e.latLng.lng()
                          };
          dispatch(setForm({positionSelected, type:'AddEvent'}));
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

    const centerMap=async (address)=> {
    try {
        const results = await getGeocode({address });
        const { lat, lng } = await getLatLng(results[0]);
        panTo({ lat, lng });

      } catch (error) {
        console.log("Error: ", error);
      }

  }

  useEffect(()=>{
    handleShow(); 
    const socket=io(process.env.REACT_APP_BACKEND_URL);
    setSkt(socket);
    if(userLogged){
      const city=userLogged.city?userLogged.city:"Montevideo";
      centerMap(city);
      socket.on("events-with-user-info",(data)=> { dispatch(setEvents(data));});
      socket.emit("get-events-with-user-info",{_id:userLogged._id});
    }else{
      socket.on("events-near",(data)=> { dispatch(setEvents(data));});
      socket.emit("get-events-near");
       
    }
    socket.on ("new-event",  (message)  =>{ dispatch(addEvent(message));console.log("new event received"); });

    return()=>{
        socket.disconnect()
        
       }
  },[userLogged])

  // useEffect(()=>{
  //   handleShow(); 
  //   if(userLogged){
  //     //later on I will probably allow the user to set himself the aprox location with coords and then I would center based on that
  //     const city=userLogged.city?userLogged.city:"Montevideo";
  //     centerMap(city);
  //     dispatch(getEventsWithUserBelongingInfo(userLogged._id));
  //   }else{
  //      dispatch(getEvents());
  //   }
  // },[userLogged,form])

 
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
            {form? form.type=='AddEvent' && <Modal show={show} onHide={handleClose}> <AddEventForm socket={skt}/> </Modal> : <></> }
   
            {form? form.type=='AddUserInfo'&& <Modal show={show} onHide={handleClose}> <AddUserForm/> </Modal>: <></> }
            {form? form.type=='AddUser' && <Modal show={show} onHide={handleClose}> <AddUserForm/> </Modal> : <></> } 
            {form? form.type=="EditEvent" && <Modal show={show} onHide={handleClose}> <EditEventForm/> </Modal>: <></> } 
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
                            { userLogged && <>
                                                <Button onClick={() => {
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
                                                </Button>
                                                 
                                                { (selected.creator===userLogged._id) && 
                                                                                      <>
                                                                                      <Button onClick={() => {
                                                                                                  handleShow()
                                                                                                  dispatch(setForm( {type:'EditEvent', event:selected})); 
                                                                                                  setSelected(null); 
                                                                                                  handleClose(); 
                                                                                                 
                                                                                              }
                                                                                            }>
                                                                                            Edit
                                                                                     </Button>
                                                                                             
                                                                                     <Button onClick={() => {
                                                                                                  dispatch(deleteEvent(selected._id)); 
                                                                                                  setSelected(null);  
                                                                                                  handleClose();
                                                                                              }
                                                                                            }>
                                                                                            Delete
                                                                                    </Button>
                                                                                     </>}
                                              
                                        </>} 
                    </Container>
                </InfoWindow>
              ) : null}
      </GoogleMap>
      
  </>) : <></>
}

