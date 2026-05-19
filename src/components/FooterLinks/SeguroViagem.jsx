import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './SeguroViagem.module.css';

const SeguroViagem = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.insurance_page_container}>
      <div className={styles.insurance_content_box}>
        
        {/* BOTÃO VOLTAR PREMIUM */}
        <button className={styles.btn_back_home} onClick={() => navigate(-1)}>
          ← Voltar
        </button>

        <header className={styles.insurance_header}>
          <span className={styles.tag_category}>PROTEÇÃO INTERNACIONAIS</span>
          <h1 className={styles.main_insurance_title}>Seguro Viagem Exclusivo</h1>
          <p className={styles.insurance_description}>
            Sua tranquilidade garantida do outro lado do mundo. Conheça as coberturas e a 
            assistência médica internacional inclusa em nossos roteiros para a Coreia do Sul.
          </p>
        </header>
        
        <div className={styles.magenta_divider_line}></div>

        <div className={styles.insurance_text_wrapper}>
          <section className={styles.insurance_intro_block}>
            <h2>Por que é indispensável?</h2>
            <p>
              Mesmo que a Coreia do Sul seja um dos países mais seguros do mundo, imprevistos médicos 
              ou extravios de bagagens podem gerar custos altíssimos fora do Brasil. Todos os pacotes 
              Luxe Seoul possuem a opção de integração com uma das maiores seguradoras globais parceiras.
            </p>
          </section>

          {/* GRID DE COBERTURAS PREMIUM */}
          <section className={styles.benefits_section}>
            <h2>Destaques da Cobertura Luxe</h2>
            <div className={styles.insurance_grid_benefits}>
              
              <div className={styles.benefit_card_premium}>
                <span className={styles.benefit_icon}>🏥</span>
                <h3>Despesas Médicas</h3>
                <p>Cobertura hospitalar de até US$ 150.000 para consultas, exames e emergências médicas em Seul.</p>
              </div>

              <div className={styles.benefit_card_premium}>
                <span className={styles.benefit_icon}>🧳</span>
                <h3>Bagagem Protegida</h3>
                <p>Indenização imediata e rastreamento em caso de extravio, danos ou atraso de malas no voo internacional.</p>
              </div>

              <div className={styles.benefit_card_premium}>
                <span className={styles.benefit_icon}>✈️</span>
                <h3>Atraso de Voo</h3>
                <p>Reembolso de despesas com alimentação e hotelaria caso sua conexão internacional atrase mais de 4 horas.</p>
              </div>

              <div className={styles.benefit_card_premium}>
                <span className={styles.benefit_icon}>📞</span>
                <h3>Suporte 24h em PT</h3>
                <p>Central de atendimento internacional exclusiva, disponível via telefone ou WhatsApp inteiramente em português.</p>
              </div>

            </div>
          </section>

          <section className={styles.insurance_intro_block}>
            <h2>Ativação e Acionamento</h2>
            <p>
              A apólice digital do seu seguro é enviada diretamente para o seu e-mail junto com o voucher da 
              viagem 7 dias antes do embarque. Em caso de necessidade de uso em solo sul-coreano, basta acionar os 
              números de emergência destacados na sua carteirinha digital.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};

export default SeguroViagem;