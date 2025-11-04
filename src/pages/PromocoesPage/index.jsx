import './style.css'

export default function PromocoesPage() {
  return (
    <section className="promocoes-page">
      <div className="container">
        <h1>Promoções Especiais</h1>
        <div className="page-content">
          <p>Aproveite nossas ofertas exclusivas!</p>
          
          <div className="promo-grid">
            <div className="promo-card">
              <div className="promo-badge">🔥 OFERTA</div>
              <h3>Kit Higiene Completo</h3>
              <p className="original-price">R$ 89,90</p>
              <p className="promo-price">R$ 59,90</p>
              <span className="discount">33% OFF</span>
            </div>
            
            <div className="promo-card">
              <div className="promo-badge">🎯 DESTAQUE</div>
              <h3>Vitaminas e Suplementos</h3>
              <p className="original-price">R$ 45,00</p>
              <p className="promo-price">R$ 35,90</p>
              <span className="discount">20% OFF</span>
            </div>
            
            <div className="promo-card">
              <div className="promo-badge">⭐ NOVIDADE</div>
              <h3>Dermocosméticos</h3>
              <p className="original-price">R$ 120,00</p>
              <p className="promo-price">R$ 89,90</p>
              <span className="discount">25% OFF</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}