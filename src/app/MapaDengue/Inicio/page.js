import PageHead from "@/components/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Home() {
  const currentPage = 'Inicio'
  
  return (
    <>
      <PageHead currentPage={currentPage}/>
      <Header currentPage={currentPage}/>
            <section className="hero-section text-center">
        <div className="container">
            <h1 className="display-4 fw-bold mb-4">Nos ajude a combater esta ameaça</h1>
            <p className="lead mb-5">Precisamos de todos para acabar com esta doença. Registre aqui um foco ou veja quais focos existem perto de você.</p>
        </div>
      </section>

      <section className="container mb-5">
          <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                  <img src="https://cdn6.campograndenews.com.br/uploads/noticias/2023/03/22/315mdjenv8aoo.jpeg"
                      className="img-fluid rounded shadow" 
                      alt="Imagem de combate à dengue"/>
              </div>
              <div className="col-lg-6">
                  <h2 className="fw-bold mb-4">Sobre nosso projeto:</h2>
                  <p className="lead">Estamos tentando fornecer uma plataforma para munir os moradores com informações para combater a dengue.</p>
                  <p>Nesta plataforma você encontra ferramentas para registrar focos ou encontrar focos perto de você.</p>
                  <Link href="/MapaDengue/Sobre" className="btn btn-outline-dark mt-3">
                    Veja como pode ajudar
                  </Link>
              </div>
          </div>
      </section>

      <section className="bg-light py-5 mb-5">
          <div className="container text-center">
              <h2 className="fw-bold mb-4">Registre aqui um foco ou veja quais os focos no seu arredor.</h2>
              <div className="d-flex justify-content-center gap-3">
                <Link href="/MapaDengue/Mapa" className="btn button-1 btn-lg">
                    Formulário de registro / Mapa
                </Link>
              </div>
          </div>
      </section>
      <Footer />
    </>
  );
}
