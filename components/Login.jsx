function Login() {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [mensagem, setMensagem] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !senha) {
      setMensagem('Preencha e-mail e senha para continuar.');
      return;
    }
    // MVP: sem autenticação real — qualquer credencial entra no painel.
    setMensagem('Acesso liberado. Redirecionando para o painel...');
    window.location.href = 'dashboard.html';
  }

  return (
    <main className="login-page">
      <section className="login-card">
        <a href="index.html" className="login-voltar">← Voltar ao site</a>

        <div className="login-brand">
          <span className="geo">GEO</span>
          <span className="lize">LIZE</span>
        </div>

        <h1 className="login-titulo">Acessar Sistema</h1>
        <p className="login-sub">Entre para acompanhar suas vagas e ocorrências.</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-label">
            E-mail
            <input
              type="email"
              className="login-input"
              placeholder="voce@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="login-label">
            Senha
            <input
              type="password"
              className="login-input"
              placeholder="••••••••"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </label>

          <button type="submit" className="login-btn">Entrar</button>
        </form>

        {mensagem && <p className="login-mensagem">{mensagem}</p>}

        <p className="login-rodape">
          Não tem conta? <a href="#">Fale com a equipe</a>
        </p>
      </section>
    </main>
  );
}
