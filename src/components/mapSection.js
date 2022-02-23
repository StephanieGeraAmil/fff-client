import React from 'react'
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
       
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}
