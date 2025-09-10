'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <div className={styles.heroContainer}>
      <section className={styles.heroWrapper} id="home">
        <div className={styles.backgroundImage}>
          <Image
            src="/images/hero4.png"
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

      <div className={styles.treatmentsBanner}>
        <div className={styles.treatmentItem}>
          <span className={styles.treatmentScript}>Harmonização</span>
          <span className={styles.treatmentMain}>FACIAL</span>
        </div>
        <div className={styles.treatmentItem}>
          <span className={styles.treatmentMain}>TOXINA</span>
          <span className={styles.treatmentScript}>Botulínica</span>
        </div>
        <div className={styles.treatmentItem}>
          <span className={styles.treatmentMain}>PREENCHIMENTO</span>
          <span className={`${styles.treatmentScript} ${styles.alignRight}`}>Full Face</span>
        </div>
        
        {/* CORREÇÃO: Usando a nova classe 'alignLeft' que NÃO inverte a ordem */}
        <div className={`${styles.treatmentItem} ${styles.alignLeft}`}>
          <span className={styles.smallScript}>Bioestimulador de</span>
          <span className={styles.treatmentMain}>COLÁGENO</span>
        </div>

        <div className={styles.treatmentItem}>
          <span className={styles.mentoriaScript}>Mentorias</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;