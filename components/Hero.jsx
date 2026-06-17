function Hero() {
    return (
        <>
            <DorSolucaoSection />
        </>
    );
}

function DorSolucaoSection() {

    const dores = [
        'Motoristas perdem tempo procurando vagas em estacionamentos lotados, sem saber onde há espaço livre.',
        'Colisões, furtos e roubos acontecem sem qualquer monitoramento em tempo real para reagir a tempo.',
        'A gestão é manual e lenta, sem dados confiáveis sobre ocupação, fluxo e ocorrências.',
    ];

    const solucoes = [
        'Mapeamento de vagas em tempo real por visão computacional, mostrando exatamente onde estacionar.',
        'IA que reconhece colisões, furtos e roubos e identifica atividades suspeitas automaticamente.',
        'Notificação instantânea para a equipe a cada ocorrência, com histórico e relatórios de operação.',
    ];

    const iconsDor = [
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>,
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>,
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 9h6M9 12h6M9 15h4" />
        </svg>,
    ];

    const iconsSolucao = [
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
        </svg>,
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>,
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>,
    ];

    const labels = ['A', 'B', 'C'];

    return (
        <section className="dor-solucao" id="solucao">
            <div className="bloco bloco-dor reveal">
                <div className="bloco-header">
                    <span className="bloco-num">01</span>
                    <h2 className="bloco-titulo">DOR</h2>
                </div>
                <div className="cards">
                    {dores.map((texto, i) => (
                        <div className="card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                            <span className="card-num">{labels[i]}</span>
                            <div className="card-icon">{iconsDor[i]}</div>
                            {texto}
                        </div>
                    ))}
                </div>
            </div>

            <div className="bloco bloco-solucao reveal">
                <div className="bloco-header">
                    <span className="bloco-num">02</span>
                    <h2 className="bloco-titulo">SOLUÇÃO</h2>
                </div>
                <div className="cards">
                    {solucoes.map((texto, i) => (
                        <div className="card reveal" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                            <span className="card-num">{labels[i]}</span>
                            <div className="card-icon">{iconsSolucao[i]}</div>
                            {texto}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}