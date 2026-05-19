import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './Contato.module.css';
import BotaoVoltar from '../BotaoVoltar/BotaoVoltar';

export default function Contato() {
  const navigate = useNavigate();

  return (
    <div className={styles.page_contato}>
      <BotaoVoltar />

      <main className={styles.container}>
        {/* LADO ESQUERDO: INFOS */}
        <motion.div 
          className={styles.info_side}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className={styles.tag}>FALE CONOSCO</span>
          <h1>VAMOS PLANEJAR SUA <span className={styles.magenta}>JORNADA?</span></h1>
          <p>Nossa equipe está pronta para criar um roteiro exclusivo para você.</p>

          <div className={styles.contact_list}>
            <div className={styles.contact_item}>
              <span>E-MAIL</span>
              <p>contato@coreiaexperience.com.br</p>
            </div>
            <div className={styles.contact_item}>
              <span>WHATSAPP</span>
              <p>+55 (43) 99999-9999</p>
            </div>
            <div className={styles.contact_item}>
              <span>LOCALIZAÇÃO</span>
              <p>Londrina, PR - Estação 43</p>
            </div>
          </div>
        </motion.div>

        {/* LADO DIREITO: FORMULÁRIO PREMIUM */}
        <motion.div 
          className={styles.form_side}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <form className={styles.glass_form}>
            <div className={styles.input_group}>
              <label>NOME COMPLETO</label>
              <input type="text" placeholder="Como podemos te chamar?" />
            </div>

            <div className={styles.input_group}>
              <label>E-MAIL</label>
              <input type="email" placeholder="seu@email.com" />
            </div>

            <div className={styles.input_group}>
              <label>MENSAGEM</label>
              <textarea placeholder="Conte-nos sobre a viagem dos seus sonhos..." rows="4"></textarea>
            </div>

            <button type="submit" className={styles.btn_enviar}>
              ENVIAR MENSAGEM
              <div className={styles.btn_glow}></div>
            </button>
          </form>
        </motion.div>
      </main>
    </div>
  );
}