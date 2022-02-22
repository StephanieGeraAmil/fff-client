import React from 'react'
import {GoogleMap, useLoadScript} from '@react-google-maps/api'

const libraries=['places']
const mapContainerStyle={
  width:'100vw',
  height:'100vh'
};
const center={
  lat:-34.90328,
  lng:-56.18816
}
export const MapSection = () => {
  const {isLoaded,loadError}=useLoadScript({
    key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries
  });
  if (loadError) return "Error loading map"
  if (!isLoaded) return "Loading"

  return (

           <div>
             <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center}>

             </GoogleMap>
           </div>
  
  )
}
