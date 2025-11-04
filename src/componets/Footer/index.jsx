import './style.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          
          {/* Seção de Informações da Farmácia */}
          <div className="footer-section">
            <h3>Farmácia Saúde+</h3>
            <p className="footer-info">
              CNPJ: 00.000.000/0000-00<br />
              Rua B, 123 - Barra da Tijuca<br />
              Rio de Janeiro - RJ<br />
              CEP: 22775-000
            </p>
          </div>

          {/* Seção de Horário de Funcionamento */}
          <div className="footer-section">
            <h4>Horário de Funcionamento</h4>
            <div className="business-hours">
              <p>Segunda a Sexta: 8h às 22h</p>
              <p>Sábados: 9h às 20h</p>
              <p>Domingos: 9h às 18h</p>
              <p className="emergency">Plantão 24h: (21) 9999-9999</p>
            </div>
          </div>

          {/* Seção de Links Rápidos */}
          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul className="footer-links">
              <li><a href="/medicamentos">Medicamentos</a></li>
              <li><a href="/cuidados-pessoais">Cuidados Pessoais</a></li>
              <li><a href="/promocoes">Promoções</a></li>
              <li><a href="/contato">Fale Conosco</a></li>
            </ul>
          </div>

          {/* Seção de Contato */}
          <div className="footer-section">
            <h4>Contato</h4>
            <div className="contact-info">
              <p>📞 (21) 3333-3333</p>
              <p>📱 (21) 99999-9999</p>
              <p>✉️ contato@farmaciasaude.com</p>
            </div>
          </div>

        </div>

        {/* Rodapé Inferior */}
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} Farmácia Saúde+. Todos os direitos reservados.
          </div>
          <div className="footer-credits">
            Desenvolvido com ❤️ para sua saúde
          </div>
        </div>
      </div>
    </footer>
  )
}