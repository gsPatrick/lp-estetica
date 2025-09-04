import { FaWhatsapp } from 'react-icons/fa';
import styles from './Tratamentos.module.css';

const Tratamentos = () => {
  return (
    <section id="tratamentos" className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <span className={styles.titleScript}>Nossos</span> tratamentos
        </h1>

        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              PREENCHIMENTO <span className={styles.cardTitleScript}>Full Face</span>
            </h2>
            <p className={styles.cardDescription}>
              Desenhado exclusivamente para cada paciente, busca devolver estrutura, contorno, formato para o rosto.
            </p>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <span className={styles.cardTitleScript}>Perfilo</span> PLASTIA
            </h2>
            <p className={styles.cardDescription}>
              Alinhamento de perfil com foco em três regiões: nariz, lábios e queixo para um perfil elegante e único.
            </p>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              TOXINA <span className={styles.cardTitleScript}>Botulínica</span>
            </h2>
            <p className={styles.cardDescription}>
              Indicada para tratamento das linhas de expressão, lifting suave do olhar e prevenção de rugas na pele.
            </p>
          </div>

          {/* Card 4 */}
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>
              <span className={styles.cardTitleScript}>Bioestimulador de</span> COLÁGENO
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