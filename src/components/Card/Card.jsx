import styles from './Card.module.css';

export default function Card({ nome, preco, imagem, aoReservar }) {
  return (
    <div className={styles.cartao}>

      <div
        className={styles.imagem}
        style={{ backgroundImage: `url(${imagem})` }}
      >
        <span className={styles.badge}>Destaque 2026</span>
      </div>

      <div className={styles.conteudo}>
        <h3 className={styles.nomePacote}>{nome}</h3>

        <p className={styles.preco}>
          A partir de <strong>R$ {preco}</strong>
        </p>

        <button 
          className={styles.botaoReservar} 
          onClick={() => aoReservar(nome)}
        >
          Reservar Agora
        </button>
      </div>

    </div>
  );
}