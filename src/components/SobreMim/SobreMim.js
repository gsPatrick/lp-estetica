import Image from 'next/image';
import styles from './SobreMim.module.css';

const SobreMim = () => {
  return (
    // A tag <section> tem o id "sobre" para que o link do menu funcione
    <section id="sobre" className={styles.section}>
      <div className={styles.backgroundImage}>
        <Image
          src="/images/sobremim2.png"
          alt="Banner Sobre Mim - Dra. Giuliane Sodré"
          layout="fill" // MUITO IMPORTANTE: Garante que a imagem preencha o container pai
          objectFit="cover" // Garante que a imagem cubra a área sem distorcer
          quality={95}
          priority
        />
      </div>
    </section>
  );
};

export default SobreMim;