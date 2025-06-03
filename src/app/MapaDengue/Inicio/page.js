import PageHead from "@/components/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import  "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  let currentPage = 'Inicio'
  
  return (
    <>
      <PageHead currentPage={currentPage}/>
      <Header currentPage={currentPage}/>
            <section class="hero-section text-center">
        <div class="container">
            <h1 class="display-4 fw-bold mb-4">Nos ajude a combater esta ameaça</h1>
            <p class="lead mb-5">Precisamos de todos para acabar com esta doença. Registre aqui um foco ou veja quais focos existem perto de você.</p>
        </div>
      </section>

      <section class="container mb-5">
          <div class="row align-items-center">
              <div class="col-lg-6 mb-4 mb-lg-0">
                  <img src="https://cdn6.campograndenews.com.br/uploads/noticias/2023/03/22/315mdjenv8aoo.jpeg"
                      class="img-fluid rounded shadow" />
              </div>
              <div class="col-lg-6">
                  <h2 class="fw-bold mb-4">Sobre nosso projeto:</h2>
                  <p class="lead">Estamos tentando fornecer uma plataforma para munir os moradores com informações para combater a dengue.</p>
                  <p>Nesta plataforma você encontra ferramentas para registrar focos ou encontrar focos perto de você.</p>
                  <a href="./about.html" class="btn btn-outline-dark mt-3">Veja como pode ajudar</a>
              </div>
          </div>
      </section>

      <section class="bg-light py-5 mb-5">
          <div class="container text-center">
              <h2 class="fw-bold mb-4">Registre aqui um foco ou veja quais os focos no seu arredor.</h2>
              <div class="d-flex justify-content-center gap-3">
                  <a href="./mapa.html" class="btn button-1 btn-lg">
                      Formulário de registro / Mapa
                  </a>
              </div>
          </div>
      </section>
      <Footer />
    </>
  );
}
