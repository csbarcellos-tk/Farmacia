import { useState } from 'react';
import './style.css';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Dados do formulário:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    
    // Limpar formulário após envio
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: ''
    });
  };

  return (
    <section className='contato-page'>
      <div className='contato-container'>
        <div className='contato-header'>
          <h1>Fale Conosco</h1>
          <p>Tire suas dúvidas e peça um orçamento sem compromisso</p>
        </div>

        <div className='contato-content'>
          {/* Formulário de Contato */}
          <form className='form-contato' onSubmit={handleSubmit}>
            <div className='form-grid'>
              <div className='form-group'>
                <label htmlFor="nome">
                  <span>Nome Completo *</span>
                  <input 
                    type="text" 
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required 
                  />
                </label>
              </div>

              <div className='form-group'>
                <label htmlFor="email">
                  <span>E-mail *</span>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </label>
              </div>

              <div className='form-group'>
                <label htmlFor="telefone">
                  <span>Telefone *</span>
                  <input 
                    type="tel" 
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required 
                  />
                </label>
              </div>

              <div className='form-group'>
                <label htmlFor="assunto">
                  <span>Assunto *</span>
                  <select 
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="orcamento">Orçamento de Medicamentos</option>
                    <option value="duvida">Dúvida sobre Produtos</option>
                    <option value="reclamacao">Reclamação</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="outro">Outro</option>
                  </select>
                </label>
              </div>

              <div className='form-group full-width'>
                <label htmlFor="mensagem">
                  <span>Mensagem *</span>
                  <textarea 
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Descreva sua dúvida ou solicitação..."
                    required
                  ></textarea>
                </label>
              </div>
            </div>

            <button type="submit" className='btn-enviar'>
              Enviar Mensagem
            </button>
          </form>

          {/* Informações de Contato */}
          <div className='contato-info'>
            <div className='info-card'>
              <h3>Informações de Contato</h3>
              
              <div className='info-item'>
                <div className='info-icon'>📞</div>
                <div className='info-content'>
                  <strong>Telefones</strong>
                  <p>(21) 3333-3333</p>
                  <p>(21) 99999-9999 (WhatsApp)</p>
                </div>
              </div>

              <div className='info-item'>
                <div className='info-icon'>✉️</div>
                <div className='info-content'>
                  <strong>E-mail</strong>
                  <p>contato@farmaciasaude.com</p>
                </div>
              </div>

              <div className='info-item'>
                <div className='info-icon'>📍</div>
                <div className='info-content'>
                  <strong>Endereço</strong>
                  <p>Rua B, 123 - Barra da Tijuca</p>
                  <p>Rio de Janeiro - RJ</p>
                  <p>CEP: 22775-000</p>
                </div>
              </div>

              <div className='info-item'>
                <div className='info-icon'>⏰</div>
                <div className='info-content'>
                  <strong>Horário de Atendimento</strong>
                  <p>Segunda a Sexta: 8h às 22h</p>
                  <p>Sábados: 9h às 20h</p>
                  <p>Domingos: 9h às 18h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}