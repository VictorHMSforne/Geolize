function Equipe() {
  const membros = [
    { nome: 'Hector de Santana Lima', papel: 'Front-End & Back-End', foto: 'img/hector.jpg', linkedin: 'https://www.linkedin.com/in/hector-santana-lima/' },
    { nome: 'Matheus Ferreira da Rocha', papel: 'Full-Stack & Arquitetura', foto: 'img/matheus.jpg', linkedin: 'https://www.linkedin.com/in/matheusrochadev/' },
    { nome: 'Thiago Campanholi Chagas', papel: 'Back-End & Documentação', foto: 'img/thiago.jpg', linkedin: 'https://www.linkedin.com/in/thiago-chagas-5213b8252/' },
    { nome: 'Victor Hugo Mendes Sforne', papel: 'Back-End & Documentação', foto: 'img/victor.jpg', linkedin: 'https://www.linkedin.com/in/victorhmsforne/' },
    { nome: 'Wellington Fernando Rocha', papel: 'Back-End', foto: 'img/wellington.jpg', linkedin: 'https://www.linkedin.com/in/wellfrocha/' },
  ];

  return (
    <section className="equipe" id="equipe">
      <div className="equipe-header reveal">
        <span className="equipe-label">Conheça o time</span>
        <h2 className="equipe-titulo"><span className="highlight">EQUIPE MAPLIZE</span></h2>
      </div>
      <div className="equipe-grid">
        {membros.map((membro, i) => (
          <a key={i} href={membro.linkedin} target="_blank" rel="noopener noreferrer" className="membro-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
            <div className="membro-foto-wrapper">
              <img className="membro-foto" src={membro.foto} alt={membro.nome} />
            </div>
            <div className="membro-info">
              <h3 className="membro-nome">{membro.nome}</h3>
              <p className="membro-papel">{membro.papel}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}