import './style.css'

export default function Funcionario(){
    // Adicione aqui o conteúdo do componente Funcionario
    return (
      <div className="container">
        <h2>Funcionário</h2>
        <form>
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Cargo" />
          <button type="submit">Adicionar</button>
        </form>
        <ul>
          <li>Exemplo de funcionário</li>
        </ul>
      </div>
    );
}
