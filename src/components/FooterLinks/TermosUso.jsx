import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando o navegador do React
import styles from './TermosUso.module.css';

const TermosUso = () => {
  const navigate = useNavigate(); // Criando a função de navegar

  // Garante que a página comece sempre no topo ao ser aberta
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        
        {/* BOTÃO VOLTAR PREMIUM */}
        <button className={styles.backButton} onClick={() => navigate(-1)}>
          ← Voltar
        </button>

        <div className={styles.headerInfo}>
          <span className={styles.subtitle}>CONTRATO LEGAL</span>
          <h1 className={styles.title}>Termos de Uso</h1>
          <p className={styles.lastUpdated}>Última atualização: Maio de 2026</p>
        </div>
        
        <div className={styles.divider}></div>

        <section className={styles.section}>
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e utilizar o sistema da Agência Luxe Seoul, você concorda expressamente em cumprir 
            e submeter-se às condições descritas neste Termo de Uso. Estes termos regulam o agendamento, 
            reserva e intermediação de roteiros turísticos exclusivos para a Coreia do Sul.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Serviços e Roteiros Premium</h2>
          <p>
            A Luxe Seoul atua na curadoria, organization e intermediação de experiências de viagem, 
            incluindo hotelaria de luxo, guias locais bilíngues e transporte privativo. As informações 
            específicas de cada pacote contratado constarão no voucher individual emitido após a confirmação do pagamento.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Responsabilidades do Usuário</h2>
          <p>
            É de total responsabilidade do viajante a obtenção e validade de documentos pessoais, 
            incluindo passaporte com validade mínima de 6 meses, vistos de entrada obrigatórios (como o K-ETA, 
            quando aplicável) e comprovantes internacionais de vacinação exigidos pelas autoridades sul-coreanas.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. Alterações e Cancelamentos</h2>
          <p>
            Pedidos de alteração de datas ou cancelamentos de serviços estão sujeitos às taxas administrativas 
            da agência e às políticas de reembolso de cada fornecedor parceiro (hotéis, companhias aéreas e guias). 
            Para mais detalhes, consulte nossa aba específica de Cancelamentos no rodapé.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermosUso;