'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import PageHead from '@/components/head';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Mapa from '@/components/map';
import * as turf from '@turf/turf';

const DynamicMap = dynamic(() => import('@/components/mapLeaflet'), {
  ssr: false,
  loading: () => <p>Carregando mapa...</p>,
});

export default function Relatorios() {
  const currentPage = 'Relatorios';

  const [bairros, setBairros] = useState([]);
  const [focosComBairro, setFocosComBairro] = useState([]);
  const [focosFiltrados, setFocosFiltrados] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarFocosComBairro() {
      try {
        const responseBairros = await fetch('/data/bairros.geojson');
        if (!responseBairros.ok) throw new Error('Erro ao carregar bairros');
        const geojsonBairros = await responseBairros.json();

        const responseFocos = await fetch('/api/focos');
        if (!responseFocos.ok) throw new Error('Erro ao carregar focos do banco');
        const focos = await responseFocos.json();

        const focosComBairroTemp = focos.map((foco) => {
          const ponto = turf.point([foco.lng, foco.lat]);
          const bairroEncontrado = geojsonBairros.features.find((feature) =>
            turf.booleanPointInPolygon(ponto, feature)
          );
          return {
            ...foco,
            bairro: bairroEncontrado?.properties.name || '',
          };
        });

        setFocosComBairro(focosComBairroTemp);

        const bairrosSet = new Set(
          focosComBairroTemp
            .map((f) => f.bairro)
            .filter((b) => b && b.trim() !== '')
        );
        setBairros(Array.from(bairrosSet).sort());

        setFocosFiltrados(focosComBairroTemp);
        setCarregando(false);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
        setCarregando(false);
      }
    }

    carregarFocosComBairro();
  }, []);


  const handleFiltrarPorBairro = (bairro) => {
    if (!bairro) {
      setFocosFiltrados(focosComBairro);
      return;
    }

    const focosFiltrados = focosComBairro.filter((foco) =>
      foco.bairro.toLowerCase().includes(bairro.toLowerCase())
    );
    setFocosFiltrados(focosFiltrados);
  };

  return (
    <>
      <PageHead currentPage={currentPage} />
      <Header currentPage={currentPage} />

      <div className="container mt-4">
        <div className="report-picker card p-4 mb-4">
          <div className="mb-3">
            <label htmlFor="busca-bairro" className="form-label">
              Buscar Bairro:
            </label>
            <input
              type="text"
              id="busca-bairro"
              className="form-control"
              placeholder="Digite para filtrar..."
              onChange={(e) => handleFiltrarPorBairro(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="foco-bairro" className="form-label">
              Selecione um Bairro:
            </label>
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
                bairros.map((bairro) => (
                  <option key={bairro} value={bairro}>
                    {bairro}
                  </option>
                ))
              )}
            </select>
          </div>
        </div>

        <div className="map-container">
          <Mapa allMarkers={focosFiltrados} />
        </div>
      </div>

      <Footer />
    </>
  );
}