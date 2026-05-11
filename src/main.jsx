import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

// Importação dos Componentes
import App from './App.jsx'
import Turismo from './components/Turismo/Turismo.jsx'
import Pacotes from './components/pacotes/Pacotes.jsx' 
import Sobre from './components/Sobre/Sobre.jsx'
import Contato from './components/Contato/Contato.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Removido o basename para funcionar corretamente na Vercel e Localhost */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/turismo" element={<Turismo />} />
        <Route path="/pacotes" element={<Pacotes />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)