import { useNavigate } from 'react-router-dom'; 
import styles from './Hero.module.css';
import imagemCerejeira from '../../assets/img/cerejeiras.png';

export default function Hero() {
  const navigate = useNavigate(); 

  return (
    <section className={styles.hero_section}>
      <div
        className={styles.hero_background}
        style={{
          backgroundImage: `url(${imagemCerejeira})`,
          backgroundColor: '#1a1a1a' 
        }}
      ></div>

      <div className={styles.petals_container}>
        {[...Array(15)].map((_, i) => (
          <div key={i} className={styles.petal}></div>
        ))}
      </div>

      <div className={styles.hero_overlay}>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_title}>
            COREIA DO <span className={styles.hero_year}>SUL</span>
          </h1>

          <p className={styles.hero_subtitle}>
            A magia das cerejeiras na Copa 2026.
          </p>

          {}
          <button 
            className={styles.btn_primary} 
            onClick={() => navigate('/pacotes')}
          >
            CONHECER PACOTES
          </button>
        </div>
      </div>
    </section>
  );
}