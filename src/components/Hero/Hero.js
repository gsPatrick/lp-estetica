'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  // Configurações de animação para os elementos
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <>
      <section className={styles.heroWrapper} id="home">
        <div className={styles.backgroundImage}>
          <Image
            src="/images/hero.png"
            alt="Dra. Giuliane Sodré"
            layout="fill"
            objectFit="cover"
            quality={90}
            priority
          />
          <div className={styles.overlay}></div>
        </div>

        <div className={styles.content}>
          <motion.h1 
            className={styles.subtitle} 
            variants={itemVariants} 
            initial="hidden" 
            animate="visible"
          >
            <span className={styles.titleScript}>Have</span> here to help you
          </motion.h1>

          <motion.h2 
            className={styles.subtitle} 
            variants={itemVariants} 
            initial="hidden" 
            animate="visible"
          >
            make the right choices
          </motion.h2>


          <motion.div className={styles.buttonContainer} variants={itemVariants} initial="hidden" animate="visible">
            <button className={`${styles.button} ${styles.buttonOutline}`}>Saiba mais</button>
            <button className={`${styles.button} ${styles.buttonOutline}`}>Resultados</button>
            <button className={`${styles.button} ${styles.buttonFilled}`}>Agendar Consulta</button>
          </motion.div>
        </div>
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