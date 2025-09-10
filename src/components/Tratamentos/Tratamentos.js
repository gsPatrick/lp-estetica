import { FaWhatsapp } from 'react-icons/fa';
import styles from './Tratamentos.module.css';

const Tratamentos = () => {
  return (
    <section id="tratamentos" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <span className={styles.titleScript}>Nossos</span>
          <span className={styles.titleNormal}>tratamentos</span>
        </div>

        <div className={styles.grid}>
          {/* CARD 1: PREENCHIMENTO */}
          <div className={styles.card}>
            <h2 className={`${styles.cardTitle} ${styles.preenchimentoTitle}`}>
              {/* Classes para ajuste manual */}
              <span className={styles.preenchimentoMain}>PREENCHIMENTO</span>
              <span className={`${styles.cardTitleScript} ${styles.preenchimentoScript}`}>Full Face</span>
            </h2>
            <p className={styles.cardDescription}>
              Desenhado exclusivamente para cada paciente, busca devolver estrutura, contorno, formato para o rosto.
            </p>
          </div>

          {/* CARD 2: PERFILO PLASTIA (Mantido como flexbox) */}
          <div className={styles.card}>
            <h2 className={`${styles.cardTitle} ${styles.perfiloTitle}`}>
              <span className={styles.cardTitleScript}>Perfilo</span> PLASTIA
            </h2>
            <p className={styles.cardDescription}>
              Alinhamento de perfil com foco em três regiões: nariz, lábios e queixo para um perfil elegante e único.
            </p>
          </div>

          {/* CARD 3: TOXINA BOTULÍNICA */}
          <div className={styles.card}>
            <h2 className={`${styles.cardTitle} ${styles.toxinaTitle}`}>
              {/* Classes para ajuste manual */}
              <span className={styles.toxinaMain}>TOXINA</span>
              <span className={`${styles.cardTitleScript} ${styles.toxinaScript}`}>Botulínica</span>
            </h2>
            <p className={styles.cardDescription}>
              Indicada para tratamento das linhas de expressão, lifting suave do olhar e prevenção de rugas na pele.
            </p>
          </div>

          {/* CARD 4: COLÁGENO */}
          <div className={styles.card}>
            <h2 className={`${styles.cardTitle} ${styles.colagenoTitle}`}>
              {/* Classes para ajuste manual */}
              <span className={`${styles.cardTitleScript} ${styles.colagenoScript}`}>Bioestimulador de</span>
              <span className={styles.colagenoMain}>COLÁGENO</span>
            </h2>
            <p className={styles.cardDescription}>
              Utilizado para tratar a flacidez da pele, melhora também a textura e o viço além de promover a firmeza.
            </p>
          </div>
        </div>

        <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noopener noreferrer" className={styles.ctaBanner}>
          <p>Não encontrou o tratamento que procurava? Fale com a nossa equipe de atendimento</p>
          <FaWhatsapp className={styles.ctaIcon} />
        </a>
      </div>
    </section>
  );
};

export default Tratamentos;