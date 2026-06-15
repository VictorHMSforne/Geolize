function Equipe() {
  const membros = [
    {
      nome: 'Hector de Santana Lima',
      papel: 'Front-End & Back-End',
      foto: 'img/hector.jpg',
    },
    {
      nome: 'Matheus Ferreira da Rocha',
      papel: 'Back-End',
      foto: 'img/matheus.jpg',
    },
    {
      nome: 'Thiago Campanholi Chagas',
      papel: 'Back-End & Documentação',
      foto: 'img/thiago.jpg',
    },
    {
      nome: 'Victor Hugo Mendes Sforne',
      papel: 'Back-End & Documentação',
      foto: 'img/victor.jpg',
    },
    {
      nome: 'Wellington Fernando Rocha',
      papel: 'Back-End',
      foto: 'img/wellington.jpg',
    },
  ];

  return (
    <section className="equipe" id="equipe">
      <div className="equipe-header">
        <span className="equipe-label">Conheça o time</span>
        <h2 className="equipe-titulo">
          <span className="highlight">EQUIPE MAPLIZE</span>
        </h2>
      </div>

      <div className="equipe-grid">
        {membros.map((membro, i) => (
          <div className="membro-card" key={i}>
            <div className="membro-foto-wrapper">
              <img
                className="membro-foto"
                src={membro.foto}
                alt={membro.nome}
              />
            </div>
            <div className="membro-info">
              <h3 className="membro-nome">{membro.nome}</h3>
              <p className="membro-papel">{membro.papel}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}