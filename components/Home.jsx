function Home(){
    return (
        <main>
            <HeroSection />
        </main>
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


