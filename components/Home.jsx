function Home() {
    return (
        <main>
            <HeroSection />
        </main>
    );
}



function HeroSection() {
    return (
        <section className="hero" id="home">
            <div className="hero-label">Monitoramento inteligente de estacionamentos</div>
            <h1>GEO<br /><span className="highlight">LIZE</span></h1>
            <div className="hero-bottom">
                <h2>
                    Visão computacional e IoT integrados para gestão de estacionamentos em tempo real.
                    Cada vaga monitorada. Cada ocorrência registrada. Painel único.
                </h2>
                <div className="hero-stat">
                    <strong>24/7</strong>
                    <span>Monitoramento contínuo</span>
                </div>
            </div>
        </section>
    );
}


