import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 23.706938,
  lng: 90.415995
};

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAAbdstV5TP1WpmrA-wWYyAl4eR5LmJHzw"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)