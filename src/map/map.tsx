'use client'
import L, { LatLngExpression } from 'leaflet';
import "leaflet/dist/leaflet.css";
import { useState } from 'react';
import { Circle, LayerGroup, MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import store from '../assets/store.svg';

interface LocationMarketInterface {
  pos: LatLngExpression
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onMove: any
}

function LocationMarker({ pos, onMove }: LocationMarketInterface) {
  const StoreIcon = new L.Icon({
    iconUrl: store,
    iconRetinaUrl: store,
    popupAnchor: [-0, -0],
    iconSize: [20, 20],

  });

  return (
    <Marker
      position={pos}
      draggable
      autoPan
      icon={StoreIcon}
      eventHandlers={{
        moveend: (event) => {
          onMove([event.target.getLatLng().lat, event.target.getLatLng().lng]);
        }
      }}
    >
      <Popup>
        <strong>Location of Store</strong>
      </Popup>
    </Marker>
  );
}

export function BoltMarketMap() {
  const [mapCenter, setMapCenter] = useState({ lat: 38.75977, lng: -9.26002 })

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

      {/* <div onClick={toggleDraggable}>
        <Marker
          draggable={draggable}
          eventHandlers={eventHandlers}
          position={position}
          ref={markerRef}
          icon={StoreIcon}>
          <Popup>
            <strong>Location of Store</strong>
          </Popup>
        </Marker>
      </div> */}
      <LocationMarker onMove={setMapCenter} pos={mapCenter} />
      <LayerGroup>
        <Circle
          center={mapCenter}
          pathOptions={{ color: '#47BE85', fillColor: '#47BE85' }}
          radius={2000} />
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