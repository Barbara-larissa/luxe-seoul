import { useState } from 'react';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Hero from './components/Hero/Hero';

// 🔥 IMPORT DAS IMAGENS (Garante que o Vite carregue os arquivos corretamente)
import seul from './assets/img/seul.png';
import busan from './assets/img/busan.png';
import jeju from './assets/img/jeju.png';



function App() {
  const [reserva, setReserva] = useState('');

  // 🔥 LISTA DE PACOTES COM AS IMAGENS IMPORTADAS
  const pacotesCoreia = [
    {
      id: 1,
      nome: "Seul: Tecnologia e Tradição",
      preco: "7.200",
      imagem: seul
    },
    {
      id: 2,
      nome: "Busan: Praias e Templos",
      preco: "5.900",
      imagem: busan
    },
    {
      id: 3,
      nome: "Jeju: A Ilha dos Deuses",
      preco: "8.500",
      imagem: jeju
    }
  ];

  return (
    <>
      {/* HEADER FIXO (Com a cor Magenta que ajustamos) */}
      <Header />

      <div className="app_container" style={{ minHeight: '100vh', backgroundColor: '#fff' }}>

        {/* SEÇÃO HERO (Destaque principal com as cerejeiras) */}
        <section className="hero_section">
          <Hero />
        </section>

        {/* CONTEÚDO PRINCIPAL (Main) */}
        <main
          className="main_content"
          style={{ 
            padding: '40px 5%', 
            marginTop: '20px', /* Ajustado para não dar um salto muito grande do Hero */
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center' 
          }}
        >

          {/* TÍTULO DA SEÇÃO - CENTRALIZADO E MAIOR */}
          <div className="title_section" style={{ 
            width: '100%', 
            textAlign: 'center', 
            padding: '60px 0 40px' 
          }}>
            <h2 className="page_title" style={{ 
              fontSize: '2.8rem', 
              fontWeight: '900', 
              color: '#1a1a1a', /* Cor escura para contraste no fundo branco */
              textTransform: 'uppercase',
              letterSpacing: '4px',
              margin: '0'
            }}>
              Pacotes Coreia do Sul 2026
            </h2>
            {/* Detalhe visual: Linha Magenta embaixo do título */}
            <div style={{
              width: '80px',
              height: '4px',
              backgroundColor: '#EF007E',
              margin: '20px auto 0',
              borderRadius: '2px',
              boxShadow: '0 0 12px rgba(239, 0, 126, 0.4)'
            }}></div>
          </div>

          {/* ALERTA DE RESERVA (Aparece quando o botão do Card é clicado) */}
          {reserva && (
            <div
              className="alert_success"
              style={{
                background: '#fce4ec', /* Rosa bem clarinho para combinar */
                padding: '20px',
                textAlign: 'center',
                borderRadius: '12px',
                margin: '0 0 40px 0',
                color: '#EF007E',
                border: '1px solid #EF007E',
                width: '100%',
                maxWidth: '600px',
                fontWeight: '600'
              }}
            >
              🎉 Excelente escolha! Reserva para <strong>{reserva}</strong> solicitada com sucesso.
            </div>
          )}

          {/* GRID DE PACOTES (Cards de Destino) */}
          <section
            className="packages_grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px',
              width: '100%',
              maxWidth: '1200px' /* Centraliza o grid em telas muito grandes */
            }}
          >
            {pacotesCoreia.map((p) => (
              <div className="package_item" key={p.id}>
                <Card
                  nome={p.nome}
                  preco={p.preco}
                  imagem={p.imagem} 
                  aoReservar={setReserva}
                />
              </div>
            ))}
          </section>

        </main>

        {/* FOOTER ESPAÇADOR */}
        <footer className="app_footer" style={{ padding: '60px 0' }}>
          {/* Você pode adicionar links de redes sociais aqui depois */}
        </footer>

      </div>
    </>
  );
}

export default App;