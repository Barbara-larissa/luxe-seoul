import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PoliticaPrivacidade.module.css';

const PoliticaPrivacidade = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.privacy_page_container}>
      <div className={styles.privacy_content_box}>
        
        {/* BOTÃO VOLTAR */}
        <button className={styles.btn_back_home} onClick={() => navigate(-1)}>
          ← Voltar
        </button>

        <header className={styles.privacy_header}>
          <span className={styles.tag_category}>SEGURANÇA DE DADOS</span>
          <h1 className={styles.main_privacy_title}>Política de Privacidade</h1>
          <p className={styles.update_date}>Última atualização: Maio de 2026</p>
        </header>
        
        <div className={styles.magenta_divider_line}></div>

        <div className={styles.text_content_wrapper}>
          <section className={styles.policy_block}>
            <h2>1. Coleta de Informações</h2>
            <p>
              Para viabilizar a emissão de passagens, reservas de hotéis premium e a emissão de vouchers 
              para a Coreia do Sul, coletamos dados essenciais como nome completo, dados de passaporte, 
              e-mail e informações de contato.
            </p>
          </section>

          <section className={styles.policy_block}>
            <h2>2. Uso dos Dados</h2>
            <p>
              Seus dados são utilizados exclusivamente para a execução dos serviços turísticos contratados 
              e segurança das transações. Não compartilhamos suas informações com terceiros para fins publicitários.
            </p>
          </section>

          <section className={styles.policy_block}>
            <h2>3. Proteção e Blindagem</h2>
            <p>
              A Luxe Seoul utiliza criptografia SSL de última geração para garantir que todos os dados 
              enviados através do nosso sistema Firebase permaneçam privados e íntegros durante todo o processo.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};

export default PoliticaPrivacidade;