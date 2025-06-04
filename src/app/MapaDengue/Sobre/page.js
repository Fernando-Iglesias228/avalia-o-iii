import PageHead from "@/components/head";
import Header from "@/components/header";
import Footer from "@/components/footer";


export default function Sobre() {
  const currentPage = 'Sobre'
  
  return (
    <>
      <PageHead currentPage={currentPage}/>
      <Header currentPage={currentPage}/>
      <div class="about-section">
        <h1>Vamos juntos lutar contra a dengue!</h1>
        <p>Nosso projeto tenta fornecer a possibilidade do próprio povo tomar responsabilidade e aumentar a coletividade ao mesmo tempo que
            luta contra esta doença tão nociva.
        </p>
      </div>
      <Footer />
    </>
  );
}
