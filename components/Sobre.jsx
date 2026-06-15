function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="sobre-container">
        <p className="sobre-numero reveal">03</p>

        <div className="sobre-conteudo">
          <div className="sobre-texto-wrapper reveal" style={{ transitionDelay: '0.1s' }}>
            <h2 className="sobre-titulo">
              Sobre a <span className="sobre-destaque">GeoLize</span>
            </h2>

            <div className="sobre-texto">
              <p>
                A GeoLize nasceu a partir de uma dor comum vivenciada por nossa equipe:
                a dificuldade de encontrar vagas disponíveis e a falta de informações
                confiáveis antes mesmo de sair de casa.
              </p>
              <p>
                Criamos uma plataforma inteligente para tornar os estacionamentos
                mais organizados, seguros e eficientes, oferecendo mais praticidade
                para motoristas e maior controle para gestores.
              </p>
              <p>
                Nosso objetivo é simplificar a rotina das pessoas e transformar
                pequenos desafios do dia a dia em experiências mais tranquilas,
                seguras e conectadas.
              </p>
            </div>
          </div>

          <div className="sobre-imagem-wrapper reveal" style={{ transitionDelay: '0.2s' }}>
            <img
              src="img/parking.png"
              alt="Ilustração do sistema GeoLize"
              className="sobre-imagem"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

