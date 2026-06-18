// Gera as vagas de um estacionamento de forma deterministica (MVP, sem back-end).
// 'livre' | 'ocupada' | 'alerta'
function gerarVagas(total, seed) {
  return Array.from({ length: total }, (_, i) => {
    const v = (i * 7 + seed * 13) % 10;
    let status = 'livre';
    if (v < 5) status = 'ocupada';
    else if (v === 5) status = 'alerta';
    return { numero: i + 1, status };
  });
}

const ESTACIONAMENTOS = [
  { id: 'p1', nome: 'Shopping Centro', endereco: 'Av. Brasil, 1200', vagas: gerarVagas(40, 1) },
  { id: 'p2', nome: 'Aeroporto Terminal 1', endereco: 'Rod. dos Aeroportos, km 8', vagas: gerarVagas(60, 4) },
  { id: 'p3', nome: 'Hospital Santa Lúcia', endereco: 'R. das Acácias, 45', vagas: gerarVagas(30, 7) },
  { id: 'p4', nome: 'Estádio Municipal', endereco: 'Av. dos Esportes, 900', vagas: gerarVagas(50, 2) },
];

const OCORRENCIAS = [
  { tipo: 'Furto', local: 'Aeroporto Terminal 1', vaga: 'B-12', hora: '14:32', nivel: 'alto' },
  { tipo: 'Colisão', local: 'Shopping Centro', vaga: 'A-07', hora: '13:58', nivel: 'medio' },
  { tipo: 'Atividade suspeita', local: 'Estádio Municipal', vaga: 'C-21', hora: '13:10', nivel: 'alto' },
  { tipo: 'Colisão', local: 'Hospital Santa Lúcia', vaga: 'D-03', hora: '12:47', nivel: 'baixo' },
];

function contar(vagas, status) {
  return vagas.filter((v) => v.status === status).length;
}

function StatCard({ label, valor, sufixo, destaque }) {
  return (
    <div className={'stat-card' + (destaque ? ' stat-card--destaque' : '')}>
      <span className="stat-valor">{valor}{sufixo}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function Dashboard() {
  const [selecionado, setSelecionado] = React.useState(ESTACIONAMENTOS[0].id);
  const estac = ESTACIONAMENTOS.find((e) => e.id === selecionado);

  // Estatisticas GERAIS (todos os estacionamentos)
  const todasVagas = ESTACIONAMENTOS.flatMap((e) => e.vagas);
  const totalGeral = todasVagas.length;
  const livresGeral = contar(todasVagas, 'livre');
  const ocupadasGeral = contar(todasVagas, 'ocupada');
  const alertasGeral = contar(todasVagas, 'alerta');
  const ocupacao = Math.round(((ocupadasGeral + alertasGeral) / totalGeral) * 100);

  return (
    <div className="dash">
      {/* Topo */}
      <header className="dash-topo">
        <div className="dash-brand">
          <span className="geo">GEO</span><span className="lize">LIZE</span>
          <span className="dash-tag">PAINEL DE OPERAÇÃO</span>
        </div>
        <div className="dash-topo-dir">
          <span className="dash-live"><span className="dash-dot"></span> AO VIVO 24/7</span>
          <a href="index.html" className="dash-sair">Sair</a>
        </div>
      </header>

      {/* Estatisticas gerais */}
      <section className="dash-stats">
        <StatCard label="Vagas monitoradas" valor={totalGeral} />
        <StatCard label="Livres agora" valor={livresGeral} destaque />
        <StatCard label="Ocupadas" valor={ocupadasGeral} />
        <StatCard label="Taxa de ocupação" valor={ocupacao} sufixo="%" />
        <StatCard label="Alertas ativos" valor={alertasGeral} />
        <StatCard label="Estacionamentos" valor={ESTACIONAMENTOS.length} />
      </section>

      <div className="dash-corpo">
        {/* Coluna esquerda: mapa de vagas */}
        <section className="dash-mapa">
          <div className="dash-secao-head">
            <h2>Mapa de Vagas</h2>
            <select
              className="dash-select"
              value={selecionado}
              onChange={(e) => setSelecionado(e.target.value)}
            >
              {ESTACIONAMENTOS.map((e) => (
                <option key={e.id} value={e.id}>{e.nome}</option>
              ))}
            </select>
          </div>

          <p className="dash-endereco">{estac.endereco}</p>

          <div className="dash-resumo-local">
            <span><strong>{contar(estac.vagas, 'livre')}</strong> livres</span>
            <span><strong>{contar(estac.vagas, 'ocupada')}</strong> ocupadas</span>
            <span><strong>{contar(estac.vagas, 'alerta')}</strong> alertas</span>
          </div>

          <div className="vagas-grid">
            {estac.vagas.map((vaga) => (
              <div
                key={vaga.numero}
                className={'vaga vaga--' + vaga.status}
                title={'Vaga ' + vaga.numero + ' — ' + vaga.status}
              >
                {vaga.numero}
              </div>
            ))}
          </div>

          <div className="vagas-legenda">
            <span><i className="leg leg--livre"></i> Livre</span>
            <span><i className="leg leg--ocupada"></i> Ocupada</span>
            <span><i className="leg leg--alerta"></i> Alerta / suspeita</span>
          </div>
        </section>

        {/* Coluna direita: ocorrencias */}
        <section className="dash-ocorrencias">
          <div className="dash-secao-head">
            <h2>Ocorrências de Segurança</h2>
            <span className="dash-badge">{OCORRENCIAS.length} hoje</span>
          </div>

          <ul className="ocorrencia-lista">
            {OCORRENCIAS.map((o, i) => (
              <li className={'ocorrencia ocorrencia--' + o.nivel} key={i}>
                <div className="ocorrencia-top">
                  <span className="ocorrencia-tipo">{o.tipo}</span>
                  <span className="ocorrencia-hora">{o.hora}</span>
                </div>
                <span className="ocorrencia-local">{o.local} · Vaga {o.vaga}</span>
              </li>
            ))}
          </ul>

          <p className="dash-nota">
            A equipe é notificada instantaneamente a cada nova ocorrência detectada pela IA.
          </p>
        </section>
      </div>
    </div>
  );
}
