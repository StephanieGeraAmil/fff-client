import React, {useCallback, useState} from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import mapStyles from "./mapStyles";

//const libraries=['places']

const containerStyle = {
  width: '40vw',
  height: '40vh'
};
const center={
  lat:-34.90328,
  lng:-56.18816
}
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};


 

export const MapSection = () => {

  const [markers, setMarkers] = useState([]);

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

   const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCwPyO0ICeErvK3sjNs8eyhpZMluSVGn5s',
   
  })

 
  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        options={options}
         onClick={onMapClick}
       
      >
      
        <></>
      </GoogleMap>
  ) : <></>
}
