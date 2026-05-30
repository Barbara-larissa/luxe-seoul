import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './index.css';

import App from './App.jsx';
import Turismo from './components/Turismo/Turismo.jsx';
import Pacotes from './components/pacotes/Pacotes.jsx';
import Sobre from './components/Sobre/Sobre.jsx';
import Contato from './components/Contato/Contato.jsx';
import PaginaHoteis from './components/Hoteis/PaginaHoteis';

// PÁGINAS DO FOOTER
import TermosUso from './components/FooterLinks/TermosUso.jsx';
import PoliticaPrivacidade from './components/FooterLinks/PoliticaPrivacidade.jsx';
import TrabalheConosco from './components/FooterLinks/TrabalheConosco.jsx';
import CentralAjuda from './components/FooterLinks/CentralAjuda.jsx';
import Cancelamentos from './components/FooterLinks/Cancelamentos.jsx';
import SeguroViagem from './components/FooterLinks/SeguroViagem.jsx';
import ContatoSeul from './components/FooterLinks/ContatoSeul.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* PRINCIPAIS */}
        <Route path="/" element={<App />} />
        <Route path="/turismo" element={<Turismo />} />
        <Route path="/pacotes" element={<Pacotes />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/hoteis" element={<PaginaHoteis />} />

        {/* FOOTER */}
        <Route path="/termos-uso" element={<TermosUso />} />
        <Route
          path="/politica-privacidade"
          element={<PoliticaPrivacidade />}
        />
        <Route
          path="/trabalhe-conosco"
          element={<TrabalheConosco />}
        />
        <Route
          path="/central-ajuda"
          element={<CentralAjuda />}
        />
        <Route
          path="/cancelamentos"
          element={<Cancelamentos />}
        />
        <Route
          path="/seguro-viagem"
          element={<SeguroViagem />}
        />
        <Route
          path="/contato-seul"
          element={<ContatoSeul />}
        />

        {/* ROTA NÃO ENCONTRADA */}
        <Route
          path="*"
          element={
            <div
              style={{
                minHeight: '100vh',
                background: '#000',
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '2rem'
              }}
            >
              Página não encontrada
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);