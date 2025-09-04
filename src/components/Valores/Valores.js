import Image from 'next/image';
import styles from './Valores.module.css';

const Valores = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Coluna da Esquerda (Card de CTA) */}
        <div className={styles.leftColumn}>
          <div className={styles.ctaCard}>
            <p className={styles.cardTitle}>TRATAMENTOS COM A NATURALIDADE DE VOCÊ MERECE</p>
            <div className={styles.imageContainer}>
              <Image
                src="/valores.png"
                alt="Mulher agendando consulta pelo celular"
                width={600}
                height={400}
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardFooter}>
              <div className={styles.footerText}>
                <h3>AGENDE AGORA</h3>
                <h2>SUA CONSULTA</h2>
              </div>
              <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
                WHATSAPP
              </a>
            </div>
          </div>
        </div>

        {/* Coluna da Direita (Nossos Valores) */}
        <div className={styles.rightColumn}>
          <h1 className={styles.title}>
            <span className={styles.titleScript}>Nossos</span> valores
          </h1>
          <p className={styles.introText}>
            Eles são a base de tudo o que fazemos e refletem nosso compromisso em oferecer uma experiência que vai além da estética: um cuidado que une técnica, arte e humanidade. São princípios que guiam cada decisão, cada atendimento e cada resultado que entregamos.
          </p>
          <div className={styles.valuesList}>
            <div className={styles.valueItem}>
              <div className={styles.valueTag}>CONFIANÇA</div>
              <p>
                Acreditamos que toda relação começa pelo acolhimento e pela segurança. Por isso, cultivamos uma atmosfera transparente, onde cada paciente sente-se segura para confiar sua beleza em nossas mãos.
              </p>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueTag}>EXCELÊNCIA</div>
              <p>
                Nossa busca diária é pela perfeição nos detalhes. Da técnica ao atendimento, do primeiro contato ao resultado final, entregamos um padrão de qualidade elevado que combina ciência, arte e sofisticação.
              </p>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueTag}>INTEGRIDADE</div>
              <p>
                Atuamos com ética e responsabilidade em cada escolha. Respeitamos a individualidade de cada paciente, valorizando a beleza real e preservando sempre a naturalidade.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Valores;