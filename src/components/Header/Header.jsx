import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import ModalLogin from '../Hero/Login/ModalLogin.jsx';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header_container}>
        <div className={styles.header_content}>

          {/* Logo */}
          <div className={styles.logo_box}>
            <Link to="/" className={styles.logo_link} onClick={closeMenu}>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg" 
                alt="Bandeira da Coreia do Sul" 
                className={styles.flag_icon} 
              />
              <div className={styles.logo_text_group}>
                <span className={styles.logo_text}>K-TRAVEL</span>
                <span className={styles.logo_highlight}>TURISMO</span>
              </div>
            </Link>
          </div>

          {/* Menu de navegação (Desktop e Mobile) */}
          <nav className={`${styles.nav_menu} ${isMenuOpen ? styles.nav_menu_open : ''}`}>
            <Link to="/" className={styles.nav_link} onClick={closeMenu}>INÍCIO</Link>
            <Link to="/pacotes" className={styles.nav_link} onClick={closeMenu}>PACOTES</Link>
            <Link to="/hoteis" className={styles.nav_link} onClick={closeMenu}>HOTÉIS</Link>
            <Link to="/sobre" className={styles.nav_link} onClick={closeMenu}>SOBRE</Link>
            <Link to="/contato" className={styles.nav_link} onClick={closeMenu}>CONTATO</Link>
            <Link to="/turismo" className={styles.nav_link} onClick={closeMenu}>TURISMO</Link>
            
            {/* Botão de Login duplicado dentro do menu mobile para melhorar a usabilidade */}
            <div className={styles.mobile_login_container}>
              <button
                className={styles.login_button}
                onClick={() => { setIsModalOpen(true); closeMenu(); }}
              >
                LOGIN
              </button>
            </div>
          </nav>

          {/* Área de Ações do Desktop (Botão de Login e o Hambúrguer) */}
          <div className={styles.action_box}>
            <div className={styles.desktop_login_container}>
              <button
                className={styles.login_button}
                onClick={() => setIsModalOpen(true)}
              >
                LOGIN
              </button>
            </div>

            {/* Botão Hambúrguer Premium com animação CSS */}
            <button 
              className={`${styles.hamburger} ${isMenuOpen ? styles.hamburger_active : ''}`}
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>
          </div>

        </div>
      </header>

      <ModalLogin
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}