'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet-geosearch/dist/geosearch.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/images/marker-icon-2x.png',
  iconUrl: '/images/marker-icon.png',
  shadowUrl: '/images/marker-shadow.png',
});

export default function MapLeaflet({ allMarkers = [], onMarkerDelete }) {
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map('map').setView([-20.4697, -54.6201], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      const provider = new OpenStreetMapProvider();
      const searchControl = new GeoSearchControl({
        provider,
        style: 'bar',
        showMarker: true,
        autoClose: true,
      });
      mapRef.current.addControl(searchControl);
    }

    const map = mapRef.current;
    markersRef.current.forEach(marker => map.removeLayer(marker));
    markersRef.current = [];

    const dengueIcon = L.icon({
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/484/484167.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    allMarkers.forEach((marker) => {
      const hasImage = marker.imagem && marker.imagem !== 'null';

      const popupContent = `
        <div class="leaflet-popup-content-wrapper">
          <div class="leaflet-popup-content">
            <b>Foco de Dengue</b><br>
            <small>${marker.nome || 'Não informado'}</small><br>
            <small>${marker.endereco}</small><br>
            <small>Tipo: ${marker.tipo}</small><br>
            ${marker.data_registro ? `<small>Registrado em: ${new Date(marker.data_registro).toLocaleDateString()}</small>` : ''}
            <div class="d-flex gap-2 mt-2">
              ${hasImage ? `
                <button 
                  class="btn btn-sm btn-primary view-btn flex-grow-1" 
                  data-id="${marker.id}"
                  data-image="${marker.imagem}"
                >
                  Ver Foto
                </button>
              ` : ''}
              <button 
                class="btn btn-sm btn-danger delete-btn flex-grow-1" 
                data-id="${marker.id}"
              >
                Remover
              </button>
            </div>
          </div>
        </div>
      `;

      const leafletMarker = L.marker([marker.lat, marker.lng], { icon: dengueIcon })
        .addTo(map)
        .bindPopup(popupContent);

      markersRef.current.push(leafletMarker);

      leafletMarker.on('popupopen', () => {
        const viewBtn = document.querySelector(`.view-btn[data-id="${marker.id}"]`);
        if (viewBtn) {
          viewBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const imageUrl = viewBtn.getAttribute('data-image');
            window.open(imageUrl, '_blank');
          });
        }

        const deleteBtn = document.querySelector(`.delete-btn[data-id="${marker.id}"]`);
        if (deleteBtn) {
          deleteBtn.addEventListener('click', async (e) => {
            e.stopPropagation();
            if (confirm('Tem certeza que deseja remover este foco?')) {
              try {
                const response = await fetch(`/api/focos/${marker.id}`, {
                  method: 'DELETE',
                });

                if (response.ok) {
                  if (onMarkerDelete) onMarkerDelete(marker.id);
                  leafletMarker.remove();
                  map.closePopup();
                } else {
                  throw new Error('Falha ao remover foco');
                }
              } catch (error) {
                console.error('Erro ao remover marcador:', error);
                alert('Erro ao remover foco: ' + error.message);
              }
            }
          });
        }
      });
    });

    if (allMarkers.length > 0) {
      const group = new L.featureGroup(
        allMarkers.map((m) => L.marker([m.lat, m.lng]))
      );
      map.fitBounds(group.getBounds().pad(0.2));
    }

    return () => {
      markersRef.current.forEach(marker => map.removeLayer(marker));
      markersRef.current = [];
    };
  }, [allMarkers, onMarkerDelete]);

  return <div id="map" style={{ height: '500px', width: '100%' }} />;
}