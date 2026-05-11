import { useNavigate } from 'react-router-dom'; // 🔥 Importante para a navegação
import styles from './Card.module.css';

export default function Card({ nome, preco, imagem, aoReservar }) {
  const navigate = useNavigate(); // Criamos a função de navegar

  return (
    <div className={styles.cartao}>
      {/* Imagem do Destino com o Badge */}
      <div 
        className={styles.imagem} 
        style={{ backgroundImage: `url(${imagem})` }}
      >
        <span className={styles.badge}>Destaque 2026</span>
      </div>

      <div className={styles.conteudo}>
        <h3 className={styles.nomePacote}>{nome}</h3>
        
        {/* Container com Preço e Botão Detalhes (lado a lado) */}
        <div className={styles.precoContainer}>
          <p className={styles.preco}>
            A partir de <strong>R$ {preco}</strong>
          </p>
          
          <button 
            className={styles.botaoDetalhes}
            onClick={() => navigate('/pacotes')} // 🔥 Agora ele pula para a página de pacotes
          >
            DETALHES
          </button>
        </div>

        {/* Botão Principal de Reserva (Abre o Modal no App.jsx) */}
        <button 
          className={styles.botaoReservar} 
          onClick={() => aoReservar({ nome, preco, imagem })}
        >
          RESERVAR AGORA
        </button>
      </div>
    </div>
  );
}