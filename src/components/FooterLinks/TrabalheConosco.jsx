import React, { useEffect, useRef } from 'react'; // Adicionado o useRef aqui
import { useNavigate } from 'react-router-dom';
import styles from './TrabalheConosco.module.css';

const TrabalheConosco = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null); // Referência para o input escondido

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Função que é disparada quando o usuário clica no botão visível
  const handleButtonClick = () => {
    fileInputRef.current.click(); // Força o clique no input de arquivo oculto
  };

  // Função disparada assim que o usuário escolhe o arquivo
  const handleFileChange = (event) => {
    const arquivoSelecionado = event.target.files[0];
    if (arquivoSelecionado) {
      alert(`Excelente! Arquivo "${arquivoSelecionado.name}" selecionado para envio.`);
      // Aqui depois daria para conectar com o Firebase Storage se quisesse salvar de verdade!
    }
  };

  return (
    <div className={styles.careers_page_container}>
      <div className={styles.careers_content_box}>
        
        {/* BOTÃO VOLTAR */}
        <button className={styles.btn_back_home} onClick={() => navigate(-1)}>
          ← Voltar
        </button>

        <header className={styles.careers_header}>
          <span className={styles.tag_category}>CARREIRAS INTERNACIONAIS</span>
          <h1 className={styles.main_careers_title}>Trabalhe Conosco</h1>
          <p className={styles.careers_description}>
            Construa o futuro do turismo de luxo. Conectamos viajantes exigentes às 
            experiências mais profundas, modernas e exclusivas dentro da Coreia do Sul.
          </p>
        </header>
        
        <div className={styles.magenta_divider_line}></div>

        <div className={styles.careers_text_wrapper}>
          <section className={styles.about_team_block}>
            <h2>Faça parte do nosso ecossistema</h2>
            <p>
              Nossa equipe é movida pela paixão pela cultura sul-coreana e pela excelência absoluta no atendimento. 
              Buscamos profissionais criativos, focados em detalhes e prontos para criar experiências memoráveis.
            </p>
          </section>

          {/* GRID DE OPORTUNIDADES/ÁREAS */}
          <section className={styles.opportunities_section}>
            <h2>Nossas Principais Áreas</h2>
            <div className={styles.careers_grid_opportunities}>
              
              <div className={styles.careers_card_vaga}>
                <h3>Consultoria de Viagem (Sales)</h3>
                <p>Especialistas em desenhar roteiros de luxo sob medida e atendimento de alto padrão.</p>
              </div>

              <div className={styles.careers_card_vaga}>
                <h3>Operações & Logística</h3>
                <p>Responsáveis pelas reservas em hotéis 5 estrelas e coordenação de transportes privativos em Seul.</p>
              </div>

              <div className={styles.careers_card_vaga}>
                <h3>Guias Locais (Bilingues)</h3>
                <p>Nossa equipe de campo na Coreia, fluente em português e coreano, imersa na história local.</p>
              </div>

            </div>
          </section>

          {/* SEÇÃO DE ENVIO DE CURRÍCULO */}
          <section className={styles.careers_cta_box}>
            <h2>Quer fazer parte do time?</h2>
            <p>Envie seu currículo e portfólio diretamente para o nosso banco de dados global.</p>
            
            {/* INPUT DE ARQUIVO ESCONDIDO */}
            <input 
              type="file" 
              ref={fileInputRef} 
              style={{ display: 'none' }} 
              accept=".pdf,.doc,.docx" // Limita para formatos de documento comuns
              onChange={handleFileChange}
            />

            {/* BOTÃO VISÍVEL QUE CHAMA O INPUT */}
            <button className={styles.btn_submit_cv} onClick={handleButtonClick}>
              Enviar Currículo
            </button>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TrabalheConosco;