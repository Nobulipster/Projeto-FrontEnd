import "./style.css";
import { useNavigate } from "react-router-dom"

function Navbar() {

  const navigate = useNavigate();

  function handleRegister() {
    navigate("/register");
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/index">
          <img
            src="../../assets/img/token.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </a>
      </div>
      <ul className="nav-links-desktop">
        <li>
          <a href="releases">Lançamentos</a>
        </li>
        <p>|</p>
        <li>
          <a href="popular">Populares</a>
        </li>
        <p>|</p>
        <li>
          <a href="genre">Gêneros</a>
        </li>
        <p>|</p>
        <li>
          <a href="promotions">Promoções</a>
        </li>
        <p>|</p>
        <li>
          <a href="account">Conta</a>
        </li>
      </ul>
      <input type="text" name="" placeholder="" />
      <a href="#" className="search">
        🔍︎
      </a>
    </nav>
  );
}

export default Navbar
