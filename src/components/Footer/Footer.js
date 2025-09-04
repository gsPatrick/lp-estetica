import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyrightText}>
          © {currentYear} Dra. Giuliane Sodré. Todos os direitos reservados.
        </p>
        <p className={styles.developerText}>
          Desenvolvido por{' '}
          <a
            href="https://www.codebypatrick.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.developerLink}
          >
            Patrick.Developer
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;