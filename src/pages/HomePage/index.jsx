import './style.css'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <section className="home-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Farmácia Saúde+</h1>
          <p className="hero-subtitle">Cuidando da sua saúde com qualidade e confiança</p>
          <p className="hero-description">
            Medicamentos, produtos de beleza e cuidados pessoais com os melhores preços 
            e atendimento especializado.
          </p>
          <div className="hero-buttons">
            <Link to="/medicamentos" className="btn btn-primary">
              Ver Medicamentos
            </Link>
            <Link to="/promocoes" className="btn btn-secondary">
              Ver Promoções
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="placeholder-image">
            🏥 💊 🩺
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="container">
          <h2>Por que escolher a Farmácia Saúde+?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3>Entrega Rápida</h3>
              <p>Entregamos em até 2 horas na região da Barra da Tijuca</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💳</div>
              <h3>Pagamento Facilitado</h3>
              <p>Aceitamos todos os cartões e parcelamos em até 12x</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👩‍⚕️</div>
              <h3>Atendimento Especializado</h3>
              <p>Farmacêuticos disponíveis para tirar suas dúvidas</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🕒</div>
              <h3>Plantão 24h</h3>
              <p>Atendimento emergencial todos os dias da semana</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories-section">
        <div className="container">
          <h2>Nossas Categorias</h2>
          <div className="categories-grid">
            <Link to="/medicamentos" className="category-card">
              <div className="category-icon">💊</div>
              <h3>Medicamentos</h3>
              <p>Remédios com receita e genéricos</p>
            </Link>
            <Link to="/cuidados-pessoais" className="category-card">
              <div className="category-icon">🧴</div>
              <h3>Cuidados Pessoais</h3>
              <p>Higiene, beleza e cosméticos</p>
            </Link>
            <Link to="/medicamentos" className="category-card">
              <div className="category-icon">🌿</div>
              <h3>Vitaminas</h3>
              <p>Suplementos e vitaminas</p>
            </Link>
            <Link to="/cuidados-pessoais" className="category-card">
              <div className="category-icon">👶</div>
              <h3>Infantil</h3>
              <p>Produtos para bebês e crianças</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Promo Banner */}
      <div className="promo-banner">
        <div className="container">
          <div className="banner-content">
            <h2>🔥 Promoções da Semana</h2>
            <p>Descontos de até 50% em produtos selecionados</p>
            <Link to="/promocoes" className="btn btn-white">
              Ver Ofertas
            </Link>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Precisa de Ajuda?</h2>
            <p>Nossa equipe está pronta para te atender</p>
            <div className="cta-buttons">
              <Link to="/contato" className="btn btn-primary">
                Fale Conosco
              </Link>
              <a href="tel:+552133333333" className="btn btn-secondary">
                📞 (21) 3333-3333
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}