import { StrictMode, useEffect } from 'react' // 🚨 IMPORTANTE: Adicione o useEffect aqui
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom' // 🚨 ADICIONE O useLocation
import './index.css'

// Seus imports de componentes continuam todos aqui...
import App from './App.jsx'
import Turismo from './components/Turismo/Turismo.jsx'
import Pacotes from './components/pacotes/Pacotes.jsx'
import Sobre from './components/Sobre/Sobre.jsx'
import Contato from './components/Contato/Contato.jsx'
import PaginaHoteis from './components/Hoteis/PaginaHoteis'

// --- COMPONENTE MÁGICO PARA CORRIGIR O SCROLL ---
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Força a janela do navegador a voltar para o topo absoluto (X: 0, Y: 0) instantaneamente
    window.scrollTo(0, 0);
  }, [pathname]); // Executa toda vez que o caminho da URL mudar

  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* 🌟 INJECTE O SCROLL TO TOP AQUI: Dentro do BrowserRouter, mas antes das Routes */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/turismo" element={<Turismo />} />
        <Route path="/pacotes" element={<Pacotes />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route
          path="/hoteis"
          element={<PaginaHoteis />}
        />
        {/* Seus links do footer continuam aqui... */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
)