import PageHead from "@/components/head";
import Header from "@/components/header";
import Footer from "@/components/footer";


export default function Relatorios() {
  let currentPage = 'Relatorios'
  
  return (
    <>
      <PageHead currentPage={currentPage}/>
      <Header currentPage={currentPage}/>
      <div class="report-picker">
        <div class="mb-3">
          <label htmlFor="busca-bairro">Buscar Bairro:</label>
          <input type="text" id="busca-bairro" className="form-control" placeholder="Digite para filtrar..."/>
        </div>
        <div class="mb-3">
          <label htmlFor="foco-bairro">Selecione um Bairro:</label>
          <select id="foco-bairro" name="foco-bairro" class="form-control">
              <option value="">Carregando bairros...</option>
          </select>
        </div>
      </div>

      <div className="map-container">
          <div id="map"></div>
      </div>
      <Footer />
    </>
  );
}
