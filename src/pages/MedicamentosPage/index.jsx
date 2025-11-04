import './style.css'

export default function MedicamentosPage() {
  return (
    <section className="medicamentos-page">
      <div className="container">
        <h1>Medicamentos</h1>
        <div className="page-content">
          <p>Encontre todos os medicamentos que você precisa com segurança e qualidade.</p>
          
          <div className="categories">
            <h2>Categorias</h2>
            <div className="categories-grid">
              <div className="category-card">
                <h3>💊 Analgésicos</h3>
                <p>Medicamentos para dor e febre</p>
              </div>
              <div className="category-card">
                <h3>🦠 Antibióticos</h3>
                <p>Tratamento de infecções</p>
              </div>
              <div className="category-card">
                <h3>❤️ Cardiovasculares</h3>
                <p>Medicamentos para o coração</p>
              </div>
              <div className="category-card">
                <h3>🌡️ Antialérgicos</h3>
                <p>Alívio para alergias</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}