import React from 'react';
import { Link } from 'react-router-dom'; // Importante para a navegação funcionar
import styles from './Footer.module.css';
import { FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* BARRA DE CONFIANÇA SUPERIOR */}
        <div className={styles.trust_bar}>
          <div className={styles.trust_item}>
            <span className={styles.trust_icon}>🛡️</span>
            <div>
              <h4>AMBIENTE SEGURO</h4>
              <p>Criptografia SSL de 256 bits</p>
            </div>
          </div>
          <div className={styles.trust_item}>
            <span className={styles.trust_icon}>⭐</span>
            <div>
              <h4>EXCELÊNCIA</h4>
              <p>Nota 4.9/5 no Trustpilot</p>
            </div>
          </div>
          <div className={styles.trust_item}>
            <span className={styles.trust_icon}>💳</span>
            <div>
              <h4>PAGAMENTO FLEX</h4>
              <p>Até 12x no cartão ou PIX</p>
            </div>
          </div>
        </div>

        <div className={styles.main_footer}>
          {/* COLUNA 1: SOBRE */}
          <div className={styles.footer_col}>
            <h2 className={styles.logo}>LUXE<span>SEOUL</span></h2>
            <p className={styles.description}>
              Especialistas em roteiros exclusivos para a Coreia do Sul. 
              Transformamos sua viagem em uma experiência inesquecível.
            </p>
          </div>

          {/* COLUNA 2: AGÊNCIA (COM LINKS CLICÁVEIS) */}
          <div className={styles.footer_col}>
            <h3>A AGÊNCIA</h3>
            <ul>
              <li><Link to="/sobre">Sobre Nós</Link></li>
              <li><Link to="/termos">Termos de Uso</Link></li>
              <li><Link to="/privacidade">Política de Privacidade</Link></li>
              <li><Link to="/trabalhe-conosco">Trabalhe Conosco</Link></li>
            </ul>
          </div>

          {/* COLUNA 3: SUPORTE */}
          <div className={styles.footer_col}>
            <h3>SUPORTE</h3>
            <ul>
              <li><Link to="/ajuda">Central de Ajuda</Link></li>
              <li><Link to="/cancelamentos">Cancelamentos</Link></li>
              <li><Link to="/seguro">Seguro Viagem</Link></li>
              <li><Link to="/contato-seul">Contato Seul</Link></li>
            </ul>
          </div>

          {/* COLUNA 4: SEGURANÇA E REDES SOCIAIS */}
          <div className={styles.footer_col}>
            <h3>SEGURANÇA</h3>
            <div className={styles.badges}>
              <div className={styles.badge_safe}>
                SITE BLINDADO
              </div>
              <div className={styles.badge_google}>
                Google Safe Browsing
              </div>
            </div>

  
   
{/* REDES SOCIAIS COM HOVER PREMIUM */}
<div className={styles.social_icons_row}>
  <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.social_icon_item}>
    <FaInstagram />
  </a>
  <a href="https://wa.me/5543996818242" target="_blank" rel="noreferrer" className={styles.social_icon_item}>
    <FaWhatsapp />
  </a>
  <a href="https://tiktok.com" target="_blank" rel="noreferrer" className={styles.social_icon_item}>
    <FaTiktok />
  </a>
</div>
          </div>
        </div>

        {/* BARRA INFERIOR (PAGAMENTOS E COPYRIGHT) */}
        <div className={styles.bottom_bar}>
          <p>&copy; 2026 Agência Luxe Seoul. CNPJ: 00.000.000/0001-00.</p>
          <div className={styles.payment_icons}>
              <span>💳</span> <span>📱</span> <span>📄</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;