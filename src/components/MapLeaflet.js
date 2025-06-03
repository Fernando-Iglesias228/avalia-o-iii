// src/components/MapLeaflet.js
'use client';

import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapLeaflet({ allMarkers = [] }) {
  useEffect(() => {
    const map = L.map('map').setView([-20.4697, -54.6201], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    const dengueIcon = L.icon({
      iconUrl: '/images/dengue-marker.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    allMarkers.forEach((marker) => {
      L.marker([marker.lat, marker.lng], { icon: dengueIcon })
        .addTo(map)
        .bindPopup(`
          <b>${marker.description}</b><br>
          ${marker.date ? `Reported: ${marker.date}` : ''}
        `);
    });

    return () => {
      map.remove();
    };
  }, [allMarkers]);

  return <div id="map" style={{ height: '500px', width: '80%' }} />;
}
