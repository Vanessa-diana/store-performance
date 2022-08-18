import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { Container } from './Map.style'

interface IData {
  latitude:number;
  longitude:number;
  name:string;
  revenue: number;
}

interface Iprops {
  data: IData[];
}

export const Map = ({ data }:Iprops) => {

const minBilling = 15000;

const defaultInit = {
  lat: -23.57,
  lng: -46.67
};

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: `${process.env.REACT_APP_KEY_GOOGLE_MAPS}`
  });
 
  return (
      <Container>
        {isLoaded ? (
            <GoogleMap
              mapContainerStyle={{ width:'100%', height:'100%' }}
              center={defaultInit}
              zoom={8}
            >
            {data.map((d)=>(
                <Marker
                  key={d.name}
                  position={{
                    lat: d.latitude,
                    lng:d.longitude
                  }}
                  icon={d.revenue < minBilling? './images/marker-red.png': './images/marker-blue.png'}
                />
            ))} 
            
            </GoogleMap>
          ) : <></>
        }
      </Container>
  )
}
