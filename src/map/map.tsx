'use client'
import "leaflet/dist/leaflet.css";
import { useState } from 'react';
import { Circle, LayerGroup, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export function BoltMarketMap() {
  const [mapCenter] = useState({ lat: 38.75977, lng: -9.26002 })

  return (
    <MapContainer
      center={mapCenter}
      zoom={13}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={mapCenter}>
        <Popup>
          Location of Store
        </Popup>
      </Marker>
      <LayerGroup>
        <Circle
          center={mapCenter}
          pathOptions={{ color: 'green', fillColor: 'green' }}
          radius={2000}
        />
        <Circle
          center={mapCenter}
          pathOptions={{ color: 'orange', fillColor: 'orange' }}
          radius={5000}
        />
        <Circle
          center={mapCenter}
          pathOptions={{ color: 'red', fillColor: 'red' }}
          radius={10000}
        />
      </LayerGroup>
    </MapContainer>
  )
}