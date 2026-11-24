
import { Routes, Route } from 'react-router-dom'
import './App.css'

// Etapa 8 - Layout comun pentru toate paginile
import Layout from './components/Layout'

// Etapa 8 - Paginile aplicatiei
import ProdusePage from './pages/ProdusePage'
import ProdusDetaliuPage from './pages/ProdusDetaliuPage'
import DesprePage from './pages/DesprePage'
import NotFoundPage from './pages/NotFoundPage'

// Importa pagina pentru cosul de cumparaturi
import CosPage from './pages/CosPage.jsx'

// Configurarea rutelor aplicatiei Event Boutique
function App() {
  return (
    <Routes>
      {/* Layout-ul pastreaza bannerul, tema si subsolul */}
      <Route element={<Layout />}>

        {/* Pagina principala cu produsele si formularul */}
        <Route path="/" element={<ProdusePage />} />

        {/* Pagina de detalii pentru produsul selectat */}
        <Route
          path="/produse/:id"
          element={<ProdusDetaliuPage />}
        />

        {/* Pagina cu informatii despre aplicatie */}
        <Route path="/despre" element={<DesprePage />} />

        {/* Pagina cosului de cumparaturi */}
        <Route path="/cos" element={<CosPage />} />

        {/* Pagina pentru adrese inexistente */}
        <Route path="*" element={<NotFoundPage />} />

      </Route>
    </Routes>
  )
}

export default App
