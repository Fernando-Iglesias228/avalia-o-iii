import PageHead from "@/components/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LimparFocos from "@/components/limparFocos";
import Mapa from "@/components/map";
import styles from "./mapa.css";

export default function PaginaMapa() {
  let currentPage = 'Mapa'
  
  return (
    <div styles={styles}>
      <PageHead currentPage={currentPage}/>
      <Header currentPage={currentPage}/>
      <div className="form-container">
        <form id="form-cadastro-foco">
            <p id="form-title">Registro de focos:</p>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nome: *</label>
                <input type="text" className="form-control" id="name" name="name" required />
            </div>
            <div className="mb-3 position-relative">
                <label htmlFor="addrs-foco" className="form-label">Endereço do foco: *</label>
                <input type="text" className="form-control" id="addrs-foco" name="addrs-foco" required autoComplete="off" />
                <div id="suggestions" className="list-group"></div>
            </div>
            <div className="mb-3">
                <label htmlFor="tipo-foco" className="form-label">Tipo do foco: *</label>
                <select className="form-control" id="tipo-foco" name="tipo-foco" required>
                    <option value="Terreno Baldio">Terreno baldio</option>
                    <option value="Casa">Casa</option>
                    <option value="Outros">Outros</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="add-img" className="form-label">Adicione aqui a imagem do foco:</label>
                <input type="file" className="form-control" id="add-img" accept="image/*" />
            </div>
            <button type="submit" className="btn btn-primary">Adicionar Foco</button>
            <LimparFocos />
        </form>
      </div>

      <div className="map-container">
          <Mapa />
      </div>
      <Footer />
    </div>
  );
}
