function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img 
          src="img/Logo.png" 
          alt="Geolize" 
          className="navbar-logo"
        />
        <span className="geo">GEO</span>
        <span className="lize">LIZE</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#solucao">Solução</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#equipe">Equipe</a></li>
      </ul>
    </nav>
  );
}