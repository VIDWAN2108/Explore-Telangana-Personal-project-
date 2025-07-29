import { MapContainer, TileLayer, Marker, Polyline, useMap } from 'react-leaflet';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

function SetView({ center }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 12);
  }, [center]);
  return null;
}

function MapWithRoute({ destination }) {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    });
  }, []);

  if (!userLocation) return <p>Loading map...</p>;

  return (
    <MapContainer center={userLocation} zoom={10} style={{ height: '400px', marginTop: '20px' }}>
      <SetView center={userLocation} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={userLocation} />
      <Marker position={destination} />
      <Polyline positions={[userLocation, destination]} color="blue" />
    </MapContainer>
  );
}

export default MapWithRoute;
