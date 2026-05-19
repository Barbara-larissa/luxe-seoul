import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './Sobre.module.css';
import cerejeirasImg from '../../assets/img/agencia.png'; // Use uma imagem mais limpa aqui
import BotaoVoltar from '../BotaoVoltar/BotaoVoltar';
export default function Sobre() {
  const navigate = useNavigate();

  return (
    <div className={styles.page_sobre}>
      <BotaoVoltar />

      <div className={styles.split_container}>
        <motion.div 
          className={styles.content_left}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.tag}>NOSSA HISTÓRIA</span>
          <h1>CONECTANDO VOCÊ AO <span className={styles.magenta}>ORIENTE</span></h1>
          
          <p className={styles.text}>
            Nascemos da paixão pela cultura sul-coreana. Especialistas em destinos como Seul, Busan e Jeju, 
            garantimos que cada detalhe da sua jornada seja impecável.
          </p>

          <div className={styles.stats_grid}>
            <div className={styles.stat}>
              <strong>+500</strong>
              <span>Viajantes</span>
            </div>
            <div className={styles.stat}>
              <strong>100%</strong>
              <span>Segurança</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.content_right}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className={styles.image_wrapper}>
             <img src={cerejeirasImg} alt="Cerejeiras" />
             <div className={styles.image_gradient}></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}