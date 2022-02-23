import React, {useCallback, useState} from 'react'
import { GoogleMap,Marker,InfoWindow,useJsApiLoader } from '@react-google-maps/api';
import mapStyles from "./mapStyles";
import { formatRelative } from "date-fns";

//const libraries=['places']

const containerStyle = {
  width: '80vw',
  height: '80vh'
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
              anchor: new window.google.maps.Point(35, 40),
              scaledSize: new window.google.maps.Size(70, 80),
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
  ) : <></>
}
