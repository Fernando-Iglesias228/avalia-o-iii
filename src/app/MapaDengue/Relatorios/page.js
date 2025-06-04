'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { OpenStreetMapProvider } from 'leaflet-geosearch';
import PageHead from '@/components/head';
import Header from '@/components/header';
import Footer from '@/components/footer';

const DynamicMap = dynamic(() => import('@/components/mapLeaflet'), {
  ssr: false,
  loading: () => <p>Carregando mapa...</p>,
});

export default function Relatorios() {
  const [bairros, setBairros] = useState([]);
  const [focosFiltrados, setFocosFiltrados] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarBairros() {
      try {
        const response = await fetch('/api/focos');
        if (!response.ok) throw new Error('Erro ao carregar focos');

        const focos = await response.json();
        const provider = new OpenStreetMapProvider();
        const bairrosUnicos = [];
        
        for (const foco of focos) {
          try {
            const results = await provider.search({ query: foco.endereco });
            if (results.length > 0) {
              const address = results[0].raw.address;
              const bairro = address.neighbourhood || address.suburb || address.city_district;
              if (bairro && !bairrosUnicos.includes(bairro)) {
                bairrosUnicos.push(bairro);
              }
            }
          } catch (error) {
            console.error('Erro ao geocodificar:', foco.endereco, error);
          }
        }
        
        setBairros(bairrosUnicos);
        setFocosFiltrados(focos);
        setCarregando(false);
      } catch (error) {
        console.error('Erro:', error);
        setCarregando(false);
      }
    }

    carregarBairros();
  }, []);

  const handleFiltrarPorBairro = async (bairro) => {
    if (!bairro) {
      const response = await fetch('/api/focos');
      setFocosFiltrados(await response.json());
      return;
    }

    const provider = new OpenStreetMapProvider();
    const focosFiltrados = [];

    const response = await fetch('/api/focos');
    const todosFocos = await response.json();

    for (const foco of todosFocos) {
      try {
        const results = await provider.search({ query: foco.endereco });
        if (results.length > 0) {
          const address = results[0].raw.address;
          const focoBairro = address.neighbourhood || address.suburb || address.city_district;
          if (focoBairro && focoBairro.toLowerCase().includes(bairro.toLowerCase())) {
            focosFiltrados.push(foco);
          }
        }
      } catch (error) {
        console.error('Erro ao geocodificar:', foco.endereco, error);
      }
    }

    setFocosFiltrados(focosFiltrados);
  };

  return (
    <>
      <PageHead currentPage={currentPage}/>
      <Header currentPage={currentPage}/>
      
      <div className="container mt-4">
        <div className="report-picker card p-4 mb-4">
          <div className="mb-3">
            <label htmlFor="busca-bairro" className="form-label">Buscar Bairro:</label>
            <input 
              type="text" 
              id="busca-bairro" 
              className="form-control" 
              placeholder="Digite para filtrar..."
              onChange={(e) => handleFiltrarPorBairro(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="foco-bairro" className="form-label">Selecione um Bairro:</label>
            <select 
              id="foco-bairro" 
              name="foco-bairro" 
              className="form-control"
              onChange={(e) => handleFiltrarPorBairro(e.target.value)}
            >
              <option value="">Todos os bairros</option>
              {carregando ? (
                <option value="">Carregando bairros...</option>
              ) : (
                bairros.map(bairro => (
                  <option key={bairro} value={bairro}>{bairro}</option>
                ))
              )}
            </select>
          </div>
        </div>

        <div className="map-container">
          <div id="map" style={{ height: '500px', width: '100%' }} />
        </div>
      </div>
      
      <Footer />
    </>
  );
}