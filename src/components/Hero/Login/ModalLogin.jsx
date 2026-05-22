import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import styles from './ModalLogin.module.css';

export default function ModalLogin({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className={styles.modal_container}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.btn_close} onClick={onClose}>&times;</button>

            <div className={styles.form_wrapper}>
              {/* ESTE É O TRILHO QUE DESLIZA */}
              <motion.div 
                className={styles.form_slider}
                animate={{ x: isLogin ? "0%" : "-50%" }} // Move 50% para a esquerda
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                
                {/* FORMULÁRIO DE LOGIN */}
                <div className={styles.form_box}>
                  <h2>BEM-VINDA <span className={styles.magenta}>DE VOLTA</span></h2>
                  <div className={styles.inputs_group}>
                    <input type="email" placeholder="E-mail" className={styles.input_field} />
                    <input type="password" placeholder="Senha" className={styles.input_field} />
                  </div>
                  <button className={styles.btn_submit}>ENTRAR</button>
                  <p>Não tem conta? <span onClick={() => setIsLogin(false)}>Cadastre-se</span></p>
                </div>

                {/* FORMULÁRIO DE CADASTRO */}
                <div className={styles.form_box}>
                  <h2>CRIAR <span className={styles.magenta}>CONTA</span></h2>
                  <div className={styles.inputs_group}>
                    <input type="text" placeholder="Nome Completo" className={styles.input_field} />
                    <input type="email" placeholder="E-mail" className={styles.input_field} />
                    <input type="password" placeholder="Crie uma Senha" className={styles.input_field} />
                  </div>
                  <button className={styles.btn_submit}>CADASTRAR</button>
                  <p>Já tem conta? <span onClick={() => setIsLogin(true)}>Faça Login</span></p>
                </div>

              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}