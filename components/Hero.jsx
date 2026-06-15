function Hero(){
    return(
        <>
            <DorSolucaoSection />
        </>
        
    );
}

function Card({ children }){
    return <div className="card">{children}</div>;
}

function DorSolucaoSection(){
    const dores = [
        "Motoristas perdem tempo procurando vagas em estacionamentos lotados, sem saber onde há espaço livre.",
        "Colisões, furtos e roubos acontecem sem qualquer monitoramento em tempo real para reagir a tempo.",
        "A gestão é manual e lenta, sem dados confiáveis sobre ocupação, fluxo e ocorrências.",
    ];

    const solucoes = [
        "Mapeamento de vagas em tempo real por visão computacional, mostrando exatamente onde estacionar.",
        "IA que reconhece colisões, furtos e roubos e identifica atividades suspeitas automaticamente.",
        "Notificação instantânea para a equipe a cada ocorrência, com histórico e relatórios de operação.",
    ];

    return (
        <section className="dor-solucao" id="solucao">
            <div className="bloco bloco-dor">
                <h2 className="bloco-titulo titulo-dor">Dor</h2>
                <div className="cards">
                    {dores.map((texto, i) => (
                        <Card key={i}>{texto}</Card>
                    ))}
                </div>
            </div>

            <hr className="divisor" />

            <div className="bloco bloco-solucao">
                <h2 className="bloco-titulo titulo-solucao">Solução</h2>
                <div className="cards">
                    {solucoes.map((texto, i) => (
                        <Card key={i}>{texto}</Card>
                    ))}
                </div>
            </div>
        </section>
    );
}