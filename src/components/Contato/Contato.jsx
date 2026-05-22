import { motion } from 'framer-motion';

import styles from './Contato.module.css';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BotaoUp from '../BotaoUp/BotaoUp';

export default function Contato() {
  return (
    <>
      <Header />

      <div className={styles.page_contato}>
        <main className={styles.container}>
          
          {/* LADO ESQUERDO */}
          <motion.div 
            className={styles.info_side}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.tag}>FALE CONOSCO</span>

            <h1>
              VAMOS PLANEJAR SUA{' '}
              <span className={styles.magenta}>JORNADA?</span>
            </h1>

            <p>
              Nossa equipe está pronta para criar um roteiro exclusivo para você.
            </p>

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

            {/* MAPA */}
            <div className={styles.map_wrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.630560241838!2d-51.17170132386127!3d-23.311005278972583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb4373a696c211%3A0x6790d986915f07a7!2zRXN0YcOnw6NvIDQzIC0gSGVsbG8gQ293b3JraW5nIExvbmRyaW5h!5e0!3m2!1spt-BR!2sbr!4v1709664560123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Agência"
                className={styles.google_map}
              />
            </div>
          </motion.div>

          {/* LADO DIREITO */}
          <motion.div 
            className={styles.form_side}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              className={styles.glass_form}
              onSubmit={(e) => e.preventDefault()}
            >
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
                <textarea
                  placeholder="Conte-nos sobre a viagem dos seus sonhos..."
                  rows="4"
                />
              </div>

              <button type="submit" className={styles.btn_enviar}>
                ENVIAR MENSAGEM
                <div className={styles.btn_glow}></div>
              </button>
            </form>
          </motion.div>

        </main>
      </div>

      {/* FOOTER + BOTÃO UP */}
      <Footer />
      <BotaoUp />
    </>
  );
}