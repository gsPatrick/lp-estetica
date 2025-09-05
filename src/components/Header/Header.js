'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
// Ícones para o menu hambúrguer e social
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
        <div className={styles.logoContainer}> {/* Renomeado para evitar conflito */}
          <Link href="/">
            <Image
              src="/images/logo2.png" // Certifique-se que esta imagem corresponde à do Canva
              alt="Dra. Giuliane Sodré Logo"
              // Ajustar width e height conforme a imagem do Canva
              width={250}
              height={70}
              priority
            />
          </Link>
        </div>

        <nav className={styles.navigation}>
          {/* Os links devem ser ajustados para usar a classe de link correta e a fonte primária */}
          <Link href="#home" className={styles.navLink}>HOME</Link>
          <Link href="#sobre" className={styles.navLink}>SOBRE</Link>
          <Link href="#tratamentos" className={styles.navLink}>TRATAMENTOS</Link>
          <Link href="#resultados" className={styles.navLink}>RESULTADOS</Link>
          <Link href="#contato" className={styles.contactButton}>CONTATO</Link>
        </nav>

        <div className={styles.socialIcons}>
          {/* Ícones sociais conforme a imagem do Canva */}
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter X"><FaXTwitter /></a>
          <a href="#" aria-label="TikTok"><FaTiktok /></a>
          <a href="#" aria-label="Email"><FaEnvelope /></a> {/* Assumindo que "@" é um ícone de email */}
          <a href="#" aria-label="Youtube"><FaYoutube /></a>
        </div>

        <button className={styles.hamburgerButton} onClick={toggleMenu} aria-label="Abrir menu">
          <FaBars />
        </button>
      </motion.header>

      {/* Overlay do Menu Mobile */}
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