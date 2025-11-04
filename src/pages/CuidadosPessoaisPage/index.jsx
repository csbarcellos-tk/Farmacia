import './style.css'

export default function CuidadosPessoaisPage() {
  return (
    <section className="cuidados-page">
      <div className="container">
        <h1>Cuidados Pessoais</h1>
        <div className="page-content">
          <p>Produtos para seu bem-estar e cuidados diários.</p>
          
          <div className="products-grid">
            <div className="product-card">
              <h3>🧴 Higiene Pessoal</h3>
              <p>Sabonetes, shampoos e condicionadores</p>
            </div>
            <div className="product-card">
              <h3>💄 Cosméticos</h3>
              <p>Maquiagem e produtos de beleza</p>
            </div>
            <div className="product-card">
              <h3>🦷 Saúde Bucal</h3>
              <p>Pastas e escovas dentais</p>
            </div>
            <div className="product-card">
              <h3>🌿 Dermocosméticos</h3>
              <p>Cuidados especiais para a pele</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}