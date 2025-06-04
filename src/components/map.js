'use client';
import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./mapLeaflet'), {
  ssr: false,
  loading: () => <p>Carregando mapa...</p>,
});

export default function Mapa({ allMarkers = [] }) {
  return <DynamicMap allMarkers={allMarkers} />;
}