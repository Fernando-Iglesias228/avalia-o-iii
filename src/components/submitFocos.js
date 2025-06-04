'use client';
import { useEffect } from 'react';
import { OpenStreetMapProvider } from 'leaflet-geosearch';

export default function SubmitFocos() {
  useEffect(() => {
    const form = document.getElementById('form-cadastro-foco');
    if (!form) return;

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const imageFile = formData.get('add-img');
      
      try {
        let imageUrl = null;
        if (imageFile && imageFile.size > 0) {
          const uploadFormData = new FormData();
          uploadFormData.append('file', imageFile);
          
          const uploadResponse = await fetch('/api/upload', {
            method: 'POST',
            body: uploadFormData,
          });
          
          if (!uploadResponse.ok) {
            throw new Error('Falha no upload da imagem');
          }
          
          const uploadData = await uploadResponse.json();
          imageUrl = uploadData.url;
        }

        const provider = new OpenStreetMapProvider();
        const endereco = formData.get('addrs-foco');
        const results = await provider.search({ query: endereco });
        
        if (results.length === 0) {
          throw new Error('Endereço não encontrado');
        }

        const { x: lng, y: lat } = results[0];

        const focoData = {
          nome: formData.get('name'),
          endereco,
          tipo: formData.get('tipo-foco'),
          imagem: imageUrl,
          lat,
          lng
        };

        const response = await fetch('/api/focos', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(focoData),
        });

        if (!response.ok) {
          throw new Error('Erro ao registrar foco');
        }

        alert('Foco registrado com sucesso!');
        form.reset();
        window.location.reload();
      } catch (error) {
        console.error('Erro:', error);
        alert('Erro: ' + error.message);
      }
    };

    form.addEventListener('submit', handleSubmit);
    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return null;
}