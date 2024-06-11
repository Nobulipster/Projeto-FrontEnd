import "./style.css";
import imgLogo from "../../assets/img/token.png";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/index">
        <img src={imgLogo} alt="Logo" width={100} height={100} />
      </a>
      <ul className="nav-links">
        <li>
          <h2>Lançamentos</h2>
        </li>
        <li>
          <h2>Populares</h2>
        </li>
        <li>
          <h2>Gêneros</h2>
        </li>
        <li>
          <h2>Promoções</h2>
        </li>
        <li id="especialLine">
          <h2>Conta</h2>
        </li>
      </ul>
      <div className="barraProcura">
        <input type="text" name="procurador" />
        <div className="search">
          <h3>🔍︎</h3>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
