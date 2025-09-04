import Image from 'next/image';
import styles from './Resultados.module.css';

const Resultados = () => {
  return (
    <section id="resultados" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.titleScript}>Resultados</h2>
          <h1 className={styles.titleMain}>elegantes e naturais</h1>
        </div>
        <p className={styles.description}>
          Nosso objetivo não é transformar quem você é, mas destacar sua melhor versão com elegância, delicadeza e segurança. Cada detalhe é pensado para que o resultado seja perfeito aos olhos e, principalmente, fiel à sua essência.
        </p>
        <div className={styles.galleryGrid}>
          {/* Você precisará colocar suas imagens na pasta /public/resultados */}
          <div className={styles.imageWrapper}>
            <Image src="/resultados/resultado-1.png" alt="Resultado de tratamento facial" width={400} height={400} className={styles.resultImage} />
          </div>
          <div className={styles.imageWrapper}>
            <Image src="/resultados/resultado-4.png" alt="Resultado de tratamento facial" width={400} height={400} className={styles.resultImage} />
          </div>
          <div className={styles.imageWrapper}>
            <Image src="/resultados/resultado-2.png" alt="Resultado de tratamento facial" width={400} height={400} className={styles.resultImage} />
          </div>
          <div className={styles.imageWrapper}>
            <Image src="/resultados/resultado-3.png" alt="Resultado de tratamento facial" width={400} height={400} className={styles.resultImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resultados;