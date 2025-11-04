import './style.css'

export default function ServicosPage(){
    return(
        <div className="servicos-container">
            <h1>Serviços</h1>
            <p>Confira nossos serviços abaixo:</p>
            <ul>
                <div className="servico-card">
                    <h2>Consultoria Financeira</h2>
                    <p>Descrição do serviço de consultoria financeira.</p>
                </div>
                <div className="servico-card">
                    <h2>Planejamento Tributário</h2>
                    <p>Descrição do serviço de planejamento tributário.</p>
                </div>
                <div className="servico-card">
                    <h2>Assessoria Contábil</h2>
                    <p>Descrição do serviço de assessoria contábil.</p>
                </div>
            </ul>
        </div>
    )
}