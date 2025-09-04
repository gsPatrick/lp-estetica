'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  // Configurações de animação para os elementos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <>
      <section className={styles.heroWrapper} id="home">
        <div className={styles.backgroundImage}>
          <Image
            src="/images/hero.png" // Caminho para a imagem
            alt="Dra. Giuliane Sodré"
            layout="fill"
            objectFit="cover"
            quality={90}
            priority
          />
          <div className={styles.overlay}></div>
        </div>

        <motion.div
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className={styles.title} variants={itemVariants}>
            <span className={styles.titleScript}>I'm</span> here to help you
          </motion.h1>
          <motion.h2 className={styles.subtitle} variants={itemVariants}>
            make the right choices
          </motion.h2>

          <motion.div className={styles.buttonContainer} variants={itemVariants}>
            <button className={`${styles.button} ${styles.buttonOutline}`}>Saiba mais</button>
            <button className={`${styles.button} ${styles.buttonOutline}`}>Resultados</button>
            <button className={`${styles.button} ${styles.buttonFilled}`}>Agendar Consulta</button>
          </motion.div>
        </motion.div>
      </section>

      {/* Banner de tratamentos que fica abaixo do Hero */}
      <div className={styles.treatmentsBanner}>
        <div className={styles.treatmentItem}>
          <span className={styles.treatmentMain}>Harmonização</span>
          <span className={styles.treatmentScript}>FACIAL</span>
        </div>
        <div className={styles.treatmentItem}>
          <span className={styles.treatmentMain}>TOXINA</span>
          <span className={styles.treatmentScript}>Botulínica</span>
        </div>
        <div className={styles.treatmentItem}>
          <span className={styles.treatmentMain}>PREENCHIMENTO</span>
          <span className={styles.treatmentScript}>Full Face</span>
        </div>
        <div className={styles.treatmentItem}>
          <span className={styles.treatmentMain}>Bioestimulador de</span>
          <span className={styles.treatmentScript}>COLÁGENO</span>
        </div>
        <div className={styles.treatmentItem}>
          <span className={styles.treatmentScript}>Mentorias</span>
        </div>
      </div>
    </>
  );
};

export default Hero;