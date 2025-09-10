'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
// Ícones
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube, FaBars, FaTimes, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import styles from './Header.module.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <motion.header
        className={styles.header}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image
              src="/images/logo2.png"
              alt="Dra. Giuliane Sodré Logo"
              width={140}
              height={28}
              priority
              style={{ display: 'block' }}
            />
          </Link>
        </div>

        {/* NAVEGAÇÃO AGORA INCLUI O BOTÃO DE CONTATO */}
        <nav className={styles.navigation}>
          <Link href="#home" className={styles.navLink}>HOME</Link>
          <Link href="#sobre" className={styles.navLink}>SOBRE</Link>
          <Link href="#tratamentos" className={styles.navLink}>TRATAMENTOS</Link>
          <Link href="#resultados" className={styles.navLink}>RESULTADOS</Link>
          {/* BOTÃO MOVIDO PARA CÁ */}
          <Link href="#contato" className={styles.contactButton}>CONTATO</Link>
        </nav>

        {/* ÍCONES SOCIAIS AGORA ESTÃO SEPARADOS */}
        <div className={styles.socialIcons}>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
        </div>


        <button className={styles.hamburgerButton} onClick={toggleMenu} aria-label="Abrir menu">
          <FaBars />
        </button>
      </motion.header>

      {/* Overlay do Menu Mobile (Estrutura mantida) */}
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
        <button className={styles.closeButton} onClick={toggleMenu} aria-label="Fechar menu">
          <FaTimes />
        </button>
        <nav className={styles.mobileNavLinks}>
          <Link href="#home" onClick={toggleMenu}>HOME</Link>
          <Link href="#sobre" onClick={toggleMenu}>SOBRE</Link>
          <Link href="#tratamentos" onClick={toggleMenu}>TRATAMENTOS</Link>
          <Link href="#resultados" onClick={toggleMenu}>RESULTADOS</Link>
          <Link href="#contato" className={styles.mobileContactButton} onClick={toggleMenu}>
            CONTATO
          </Link>
        </nav>
        <div className={styles.mobileSocialIcons}>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter X"><FaXTwitter /></a>
        </div>
      </div>
    </>
  );
};

export default Header;