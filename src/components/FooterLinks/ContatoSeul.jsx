import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ContatoSeul.module.css';

const ContatoSeul = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.contact_seoul_container}>
      <div className={styles.contact_content_box}>
        
        {/* BOTÃO VOLTAR PREMIUM */}
        <button className={styles.btn_back_home} onClick={() => navigate(-1)}>
          ← Voltar
        </button>

        <header className={styles.contact_header}>
          <span className={styles.tag_category}>PRESENÇA LOCAL</span>
          <h1 className={styles.main_contact_title}>Escritório Seul</h1>
          <p className={styles.contact_description}>
            Nossa base operacional no coração da Coreia do Sul. Oferecemos suporte presencial 
            e assistência rápida para todos os nossos viajantes em solo coreano.
          </p>
        </header>
        
        <div className={styles.magenta_divider_line}></div>

        <div className={styles.contact_grid_info}>
          
          {/* BLOCO ENDEREÇO */}
          <div className={styles.contact_card_premium}>
            <span className={styles.info_icon}>📍</span>
            <h3>Endereço</h3>
            <p>
              123 Gangnam-daero, Gangnam-gu,<br />
              Seoul, South Korea<br />
              Edifício Seoul Tower, Sala 1502
            </p>
          </div>

          {/* BLOCO HORÁRIO */}
          <div className={styles.contact_card_premium}>
            <span className={styles.info_icon}>⏰</span>
            <h3>Horário Local</h3>
            <p>
              Segunda a Sexta: 09:00 às 18:00<br />
              Sábado: 09:00 às 13:00<br />
              <strong>(Fuso: GMT+9)</strong>
            </p>
          </div>

          {/* BLOCO CONTATO DIRETO */}
          <div className={styles.contact_card_premium}>
            <span className={styles.info_icon}>📞</span>
            <h3>Telefone Local</h3>
            <p>
              +82 2-1234-5678<br />
              +82 10-9876-5432 (WhatsApp Support)
            </p>
          </div>

        </div>

        {/* BOX DE EMERGÊNCIA 24H */}
        <section className={styles.emergency_box}>
          <div className={styles.emergency_content}>
            <h2>Suporte de Emergência 24/7</h2>
            <p>
              Para viajantes Luxe Seoul com roteiros em andamento, nosso canal de emergência 
              via WhatsApp permanece ativo 24 horas por dia, 7 dias por semana.
            </p>
            <span className={styles.emergency_number}>+55 (43) 99681-8242</span>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ContatoSeul;