import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import BotaoUp from './components/BotaoUp/BotaoUp';


// Imports do Calendário
import { DateRange } from 'react-date-range';
import { ptBR } from 'date-fns/locale';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';



// Assets
import seul from './assets/img/seul.png';
import busan from './assets/img/busan.png';
import jeju from './assets/img/jeju.png';
import './App.css';

function App() {
  const navigate = useNavigate();

  // Estados para o Modal e Agendamento (MANTIDOS)
  const [pacoteAtivo, setPacoteAtivo] = useState(null);
  const [adultos, setAdultos] = useState(1);
  const [criancas, setCriancas] = useState(0);
  const [state, setState] = useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }]);

  const pacotesCoreia = [
    { id: 1, nome: "Seul: Tecnologia e Tradição", preco: "7.200", imagem: seul },
    { id: 2, nome: "Busan: Praias e Templos", preco: "5.900", imagem: busan },
    { id: 3, nome: "Jeju: A Ilha dos Deuses", preco: "8.500", imagem: jeju }
  ];

  // Lógica do WhatsApp (MANTIDA)
  const enviarWhatsApp = () => {
    if (!pacoteAtivo) return;
    const dataInicio = state[0].startDate.toLocaleDateString('pt-BR');
    const dataFim = state[0].endDate.toLocaleDateString('pt-BR');
    const mensagem = `Olá! Tenho interesse no pacote *${pacoteAtivo.nome}*.\n\n` +
      `📅 Período: ${dataInicio} até ${dataFim}\n` +
      `👥 Adultos: ${adultos} | 👶 Crianças: ${criancas}\n\n` +
      `*Poderia me confirmar o valor total?*`;
    window.open(`https://wa.me/5543996818242?text=${encodeURIComponent(mensagem)}`, "_blank");
  };

  return (
    <div className="app_container">
      <Header />

      <section className="hero_section">
        <Hero />
      </section>

      <main className="main_content">
        <div className="title_section">
          <h2 className="page_title">Pacotes Coreia do Sul 2026</h2>
          <div className="title_line"></div>
        </div>

        <section className="packages_grid">
          {pacotesCoreia.map((p) => (
            <div className="package_item" key={p.id}>
              <Card
                nome={p.nome}
                preco={p.preco}
                imagem={p.imagem}
                aoReservar={() => setPacoteAtivo(p)}
              />
            </div>
          ))}
        </section>
      </main>

      {/* Modal de Agendamento */}
      {pacoteAtivo && (
        <div className="modal_overlay">
          <div className="modal_content">
            <button onClick={() => setPacoteAtivo(null)} className="btn_fechar">✕</button>
            <h2 className="modal_title">Agendar Viagem</h2>
            <p className="modal_subtitle">Destino: <strong>{pacoteAtivo.nome}</strong></p>

            <div className="calendar_container">
              <DateRange
                onChange={item => setState([item.selection])}
                ranges={state}
                locale={ptBR}
                rangeColors={['#EF007E']}
              />
            </div>

            <div className="modal_grid_inputs">
              <div className="modal_input_group">
                <label>Adultos:</label>
                <input
                  type="number"
                  min="1"
                  value={adultos}
                  onChange={(e) => setAdultos(e.target.value)}
                  className="modal_input"
                />
              </div>
              <div className="modal_input_group">
                <label>Crianças:</label>
                <input
                  type="number"
                  min="0"
                  value={criancas}
                  onChange={(e) => setCriancas(e.target.value)}
                  className="modal_input"
                />
              </div>
            </div>

            <div className="modal_footer">
              <p className="modal_price_total">Valor total: <strong>R$ {pacoteAtivo.preco}</strong></p>
              <button className="btn_confirmar" onClick={enviarWhatsApp}>Confirmar no WhatsApp</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <BotaoUp />
    </div>
  );
}

export default App;