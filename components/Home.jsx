function Home(){
    return (
        <main>
            <Navbar />
            <HeroSection />
            <DorSolucaoSection />
        </main>
    );
}

function Navbar(){
    return (
        <nav className="navbar">
            <div className="navbar-brand">Geolize</div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#solucao">Solução</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#equipe">Equipe</a></li>
            </ul>
        </nav>
    );
}

function HeroSection(){
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <h1>GEOLIZE</h1>
                <h2>Visibilidade total. Segurança em cada vaga.</h2>
                <p>
                    O Geolize integra sensores IoT e visão computacional para transformar a gestão de estacionamentos. 
                    Em parceria com empresas de segurança, entregamos monitoramento em tempo real, 
                    identificando vagas disponíveis e ocupadas com precisão — tudo em um painel centralizado, simples e eficiente.
                </p>
            </div>
        </section>
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
