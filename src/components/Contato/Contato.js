import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import styles from './Contato.module.css';

const Contato = () => {
  return (
    <section id="contato" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>
            <span className={styles.titleScript}>Onde</span> nos encontrar
          </h1>
        </div>

        <div className={styles.contentWrapper}>
          {/* Coluna da Esquerda (Informações) */}
          <div className={styles.leftColumn}>
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}><FaMapMarkerAlt /></div>
              <div className={styles.textWrapper}>
                <h3 className={styles.cardTitle}>Endereço</h3>
                <p>Av. Independência, 925 - sala 1105</p>
                <p>Porto Alegre - RS</p>
                <p>CEP: 90035-076</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}><FaPhoneAlt /></div>
              <div className={styles.textWrapper}>
                <h3 className={styles.cardTitle}>Telefone</h3>
                <p>(51) 98767-3489</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}><FaWhatsapp /></div>
              <div className={styles.textWrapper}>
                <h3 className={styles.cardTitle}>WhatsApp</h3>
                <a href="https://wa.me/SEUNUMERO" target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
                  Conversar no WhatsApp
                </a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}><FaEnvelope /></div>
              <div className={styles.textWrapper}>
                <h3 className={styles.cardTitle}>E-mail</h3>
                <p>contato@dragulianesodre.com.br</p>
              </div>
            </div>
          </div>

          {/* Coluna da Direita (Mapa) */}
          <div className={styles.rightColumn}>
            <div className={styles.mapPlaceholder}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.2517606332126!2d-51.21175100000001!3d-30.029634299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951979ae11e97c9d%3A0x69033c846ace3808!2sAv.%20Independ%C3%AAncia%2C%20925%20-%20Sala%201105%20-%20Independ%C3%AAncia%2C%20Porto%20Alegre%20-%20RS%2C%2090035-076!5e0!3m2!1spt-BR!2sbr!4v1757002979697!5m2!1spt-BR!2sbr"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className={styles.mapFrame}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;