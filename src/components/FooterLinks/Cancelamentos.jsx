import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cancelamentos.module.css';

const Cancelamentos = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.cancel_page_container}>
      <div className={styles.cancel_content_box}>
        
        {/* BOTÃO VOLTAR PREMIUM */}
        <button className={styles.btn_back_home} onClick={() => navigate(-1)}>
          ← Voltar
        </button>

        <header className={styles.cancel_header}>
          <span className={styles.tag_category}>POLÍTICAS DA AGÊNCIA</span>
          <h1 className={styles.main_cancel_title}>Alterações e Cancelamentos</h1>
          <p className={styles.cancel_description}>
            Entendemos que imprevistos acontecem. Aqui você encontra as diretrizes de reembolso, 
            prazos e procedimentos para pacotes de viagem com destino à Coreia do Sul.
          </p>
        </header>
        
        <div className={styles.magenta_divider_line}></div>

        <div className={styles.cancel_text_wrapper}>
          <section className={styles.cancel_policy_block}>
            <h2>Como Solicitar?</h2>
            <p>
              Qualquer pedido de cancelamento ou alteração de data deve ser formalizado diretamente com o seu 
              consultor de viagens ou através do e-mail de suporte da agência, informando o número do seu voucher.
            </p>
          </section>

          {/* CRONOGRAMA DE REEMBOLSO */}
          <section className={styles.timeline_section}>
            <h2>Prazos e Devoluções</h2>
            <p className={styles.timeline_intro}>O percentual de reembolso varia conforme a antecedência do pedido antes do embarque:</p>
            
            <div className={styles.cancel_timeline_wrapper}>
              
              <div className={styles.cancel_step_card}>
                <span className={styles.step_days}>Até 60 dias antes</span>
                <h3>Reembolso de 100%</h3>
                <p>Devolução integral do valor investido na curadoria da agência (sujeito a taxas de companhias aéreas parceiras).</p>
              </div>

              <div className={styles.cancel_step_card}>
                <span className={styles.step_days}>De 59 a 30 dias antes</span>
                <h3>Reembolso de 70%</h3>
                <p>Retenção de 30% do valor do pacote para cobertura de custos operacionais e multas de hotelaria em Seul.</p>
              </div>

              <div className={styles.cancel_step_card}>
                <span className={styles.step_days}>Menos de 30 dias</span>
                <h3>Reembolso de 20%</h3>
                <p>Devolução parcial devido aos bloqueios de voos internos, transporte privativo e guias locais pré-pagos.</p>
              </div>

            </div>
          </section>

          <section className={styles.cancel_policy_block}>
            <h2>Casos de Força Maior</h2>
            <p>
              Em situações excepcionais como cancelamentos de voos por condições climáticas severas, restrições 
              governamentais ou problemas de saúde comprovados, nossa equipe intermediará junto aos hotéis 
              e operadoras para garantir o maior estorno ou crédito possível para uma viagem futura.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
};

export default Cancelamentos;