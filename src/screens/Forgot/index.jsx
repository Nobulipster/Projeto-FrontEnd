import "./style.css";

function Forgot() {
  return (
    <div className="master">
      <div className="backAccount">
        <div className="title">
          <h1>Recuperar Conta</h1>
        </div>
        <div className="register-box">
          <input type="text" required />
          <label>E-mail</label>
        </div>
        <div>
          <a href="/login" className="seta">
            →
          </a>
        </div>
        <div>
          <a href="/" className="createAccount">
            Criar Conta
          </a>
        </div>
        <div>
          <a href="/login" className="loginPass">
            Fazer Login
          </a>
        </div>
      </div>
      <div className="ibage"></div>
    </div>
  );
}

export default Forgot;