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
    {/* O basename="/luxe-seoul" é a peça chave! 
      Ele avisa ao React Router que o site está dentro de uma subpasta no GitHub.
    */}
    <BrowserRouter basename="/luxe-seoul">
      <Routes>
        {/* Rota da Página Inicial */}
        <Route path="/" element={<App />} />
        
        {/* Rota da Página de Turismo */}
        <Route path="/turismo" element={<Turismo />} />
        
        {/* Rota da Página de Pacotes */}
        <Route path="/pacotes" element={<Pacotes />} />

        {/* Rota da Página Sobre a Agência */}
        <Route path="/sobre" element={<Sobre />} />

        {/* Rota da Página de Contato */}
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)