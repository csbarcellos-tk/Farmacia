import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import SobreNosPage from './pages/SobreNosPage'
import { Routes, Route } from 'react-router-dom'

// Importações condicionais ou lazy loading para páginas em desenvolvimento
let MedicamentosPage, CuidadosPessoaisPage, PromocoesPage, ContatoPage

try {
  MedicamentosPage = require('./pages/MedicamentosPage').default
} catch {
  MedicamentosPage = () => <PagePlaceholder title="Medicamentos" />
}

try {
  CuidadosPessoaisPage = require('./pages/CuidadosPessoaisPage').default
} catch {
  CuidadosPessoaisPage = () => <PagePlaceholder title="Cuidados Pessoais" />
}

try {
  PromocoesPage = require('./pages/PromocoesPage').default
} catch {
  PromocoesPage = () => <PagePlaceholder title="Promoções" />
}

try {
  ContatoPage = require('./pages/FaleConoscoPage').default
} catch {
  ContatoPage = () => <PagePlaceholder title="Fale Conosco" />
}

// Componente placeholder para páginas não criadas
function PagePlaceholder({ title }) {
  return (
    <section style={{ 
      padding: '100px 20px', 
      textAlign: 'center',
      minHeight: '50vh'
    }}>
      <h1>{title}</h1>
      <p>Página em desenvolvimento - Em breve teremos conteúdo aqui!</p>
      <a href="/" style={{
        color: '#3b82f6',
        textDecoration: 'none',
        fontWeight: 'bold',
        marginTop: '20px',
        display: 'inline-block'
      }}>
        Voltar para a página inicial
      </a>
    </section>
  )
}

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/sobre-nos' element={<SobreNosPage />} />
          <Route path='/medicamentos' element={<MedicamentosPage />} />
          <Route path='/cuidados-pessoais' element={<CuidadosPessoaisPage />} />
          <Route path='/promocoes' element={<PromocoesPage />} />
          <Route path='/contato' element={<ContatoPage />} />
          
          {/* Rota fallback para páginas não encontradas */}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

function NotFoundPage() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '100px 20px',
      minHeight: '50vh'
    }}>
      <h1>Página Não Encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <a href="/" style={{
        color: '#3b82f6',
        textDecoration: 'none',
        fontWeight: 'bold'
      }}>
        Voltar para a página inicial
      </a>
    </div>
  )
}

export default App