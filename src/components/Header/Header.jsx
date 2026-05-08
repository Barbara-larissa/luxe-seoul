import { useState } from 'react'; // Passo 1: Importar o controle de estado
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import ModalLogin from '../Login/ModalLogin.jsx';// Passo 2: Importar o Modal (ajuste o caminho se necessário)

export default function Header() {
  // Passo 3: Criar o estado para saber se o modal está aberto ou não
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className={styles.header_container}>
        <div className={styles.header_content}>

          {/* Logo */}
          <div className={styles.logo_box}>
            <Link to="/" className={styles.logo_link}>
              <span className={styles.logo_text}>K-TRAVEL</span>
              <span className={styles.logo_highlight}>TURISMO</span>
            </Link>
          </div>

          {/* Menu de navegação */}
          <nav className={styles.nav_menu}>
            <Link to="/" className={styles.nav_link}>INÍCIO</Link>
            <Link to="/pacotes" className={styles.nav_link}>PACOTES</Link>
            <Link to="/sobre" className={styles.nav_link}>SOBRE</Link>
            <Link to="/contato" className={styles.nav_link}>CONTATO</Link>

            <Link to="/turismo" className={styles.nav_link}>
              TURISMO
            </Link>
          </nav>

          {/* Botão de ação - Agora com o onClick para abrir o modal */}
          <div className={styles.action_box}>
            <button
              className={styles.login_button}
              onClick={() => setIsModalOpen(true)}
            >
              LOGIN
            </button>
          </div>
        </div>
      </header>

      {/* Passo 4: Chamar o Modal aqui embaixo */}
      <ModalLogin
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}