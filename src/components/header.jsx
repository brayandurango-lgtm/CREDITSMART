import "./Header.css"; // (Opcional si usas un CSS separado)

function Header() {
  return (
    <header className="site-header">
      <div className="container">

        {/* LOGOTIPO */}
        <img
          src="/Logotipo de la empresa.png"
          alt="Logotipo de la empresa"
          className="logo"
        />

        <h1>🍏 Bienvenidos al nuevo sistema financiero CreditSmart</h1>

        <nav className="main-nav">
          <a href="/">Home</a>
          <a href="/simulador">Simulador</a>
          <a href="/solicitar">Solicitar</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;