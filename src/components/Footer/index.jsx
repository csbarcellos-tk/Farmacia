import './style.css'

export default function Footer() {
  return (
    <footer className="footer-container">
      {/* From Uiverse.io by Tiagoadag */}
      <div className="card">
        <div className="card2">
          <div className="footer-content">
            <div>
              <strong>Notes</strong>
              <br />
              CNPJ-00.000.000/0000
            </div>
            <div>
              Rua B, 123 Barra da Tijuca - RJ
            </div>
            <div className="copy">
              &copy;{new Date().getFullYear()} Todos os direitos reservados.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
