import Hero from "../components/Hero/Hero";
import Valores from "../components/Valores/Valores";
import SobreMim from "../components/SobreMim/SobreMim";
import Tratamentos from "../components/Tratamentos/Tratamentos";
import Depoimentos from "../components/Depoimentos/Depoimentos";
import Resultados from "../components/Resultados/Resultados";
import Consultorio from "../components/Consultorio/Consultorio";
import Contato from "../components/Contato/Contato"; // 1. Importe o novo componente

export default function Home() {
  return (
    <>
      <Hero />
      <Valores />
      <SobreMim />
      <Tratamentos />
      <Depoimentos />
      <Resultados />
      <Consultorio />
      <Contato /> {/* 2. Adicione o componente aqui */}
    </>
  );
}