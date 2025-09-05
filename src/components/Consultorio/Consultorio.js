import Image from 'next/image';
import styles from './Consultorio.module.css';

const Consultorio = () => {
  return (
    <section id="consultorio" className={styles.section}>
      <div className={styles.container}>
        {/* Coluna da Esquerda (Imagem) */}
        <div className={styles.leftColumn}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/lugar2.png" // Coloque a imagem do consultório na pasta /public
              alt="Foto do Consultório Boutique"
              width={440}
              height={500} // ALTERADO: Dimensões aumentadas mantendo proporção retangular vertical
              className={styles.consultorioImage}
            />
          </div>
        </div>

        {/* Coluna da Direita (Texto) */}
        <div className={styles.rightColumn}>
          <h2 className={styles.titleMain}>Consultório</h2>
          <h1 className={styles.titleScript}>Boutique</h1>

          <div className={styles.textContainer}>
            <p>
              Desde a recepção, tudo é pensado para oferecer uma experiência exclusiva e personalizada. Cada detalhe do espaço reflete sofisticação, conforto e atenção, proporcionando um atendimento que vai além do convencional.
            </p>
            <p>
              Aqui, cada paciente é recebida de forma única, com protocolos cuidadosamente planejados, técnicas avançadas e resultados que respeitam a individualidade.
            </p>
            <p>
              Nosso objetivo é criar um ambiente onde beleza, cuidado e bem-estar caminham juntos, transformando cada visita em uma experiência memorável e elegante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultorio;