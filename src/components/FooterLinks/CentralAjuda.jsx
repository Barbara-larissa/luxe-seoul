import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CentralAjuda.module.css';

const CentralAjuda = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.help_page_container}>
      <div className={styles.help_content_box}>
        
        {/* BOTÃO VOLTAR PREMIUM */}
        <button className={styles.btn_back_home} onClick={() => navigate(-1)}>
          ← Voltar
        </button>

        <header className={styles.help_header}>
          <span className={styles.tag_category}>SUPORTE AO CLIENTE</span>
          <h1 className={styles.main_help_title}>Central de Ajuda</h1>
          <p className={styles.help_description}>
            Como podemos ajudar na sua próxima experiência de luxo? Encontre respostas rápidas sobre 
            nossos roteiros exclusivos para a Coreia do Sul.
          </p>
        </header>
        
        <div className={styles.magenta_divider_line}></div>

        {/* SEÇÃO DE PERGUNTAS FREQUENTES */}
        <div className={styles.help_faq_wrapper}>
          <h2>Principais Dúvidas</h2>
          
          <div className={styles.help_faq_grid}>
            
            <div className={styles.faq_card_item}>
              <h3>Como funciona a reserva dos pacotes?</h3>
              <p>
                Após escolher o seu roteiro premium, nossa equipe de consultores entra em contato para 
                personalizar os detalhes. A reserva de hotéis e guias é confirmada imediatamente após a 
                validação do pagamento.
              </p>
            </div>

            <div className={styles.faq_card_item}>
              <h3>O que é o K-ETA e como faço para emitir?</h3>
              <p>
                O K-ETA é uma autorização eletrônica de viagem obrigatória para entrar na Coreia do Sul. 
                Não se preocupe: a equipe de operações da Luxe Seoul auxilia na emissão e preenchimento 
                de toda a documentação necessária inclusa no pacote.
              </p>
            </div>

            <div className={styles.faq_card_item}>
              <h3>Os guias locais falam português?</h3>
              <p>
                Sim! Todos os guias privativos da Luxe Seoul são profissionais bilíngues (fluentes em 
                português e coreano), altamente treinados para fazer a ponte cultural e histórica perfeita.
              </p>
            </div>

            <div className={styles.faq_card_item}>
              <h3>Quais são as formas de pagamento?</h3>
              <p>
                Oferecemos condições totalmente flexíveis para a sua comodidade. Você pode realizar o 
                pagamento via PIX, transferência internacional bancária ou parcelado em até 12x em 
                cartões de crédito premium.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default CentralAjuda;