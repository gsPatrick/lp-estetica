import Image from 'next/image';
import { FaEnvelope, FaStar } from 'react-icons/fa';
import styles from './Depoimentos.module.css';

const Depoimentos = () => {
  return (
    <section id="depoimentos" className={styles.section}>
      <div className={styles.backgroundImage}>
        <Image
          src="/images/cafe.png" // Você precisará adicionar a imagem de fundo nesta pasta public
          alt="Xícara de café e decoração elegante"
          layout="fill"
          objectFit="cover"
          quality={90}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        <h1 className={styles.title}>DEPOIMENTOS</h1>

        <div className={styles.testimonialCard}>
          <div className={styles.cardHeader}>
            <div className={styles.userInfo}>
              <Image
                src="/images/depoimento.png" // E o avatar da cliente aqui na pasta public
                alt="Foto de Fernanda S."
                width={70}
                height={70}
                className={styles.avatar}
              />
              <div className={styles.userDetails}>
                <p className={styles.userName}>FERNANDA S.</p>
                <div className={styles.rating}>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            <FaEnvelope className={styles.icon} />
          </div>
          <p className={styles.testimonialText}>
            Me senti super à vontade e segura desde o início. A Giu é uma pessoa muito divertida e me ouviu com muito cuidado e atenção e nos conectamos como se fôssemos velhas amigas. Escolhi estar nas melhores mãos, depois do meu tratamento sou uma nova mulher!!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;