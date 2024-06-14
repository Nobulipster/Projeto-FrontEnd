import "./style.css";

function Register() {
  return (
    <div className="master">
      <div className="register">
        <div className="title">
          <h1>Registrar</h1>
        </div>
        <div className="register-box">
          <input type="text" required />
          <label>Nome do Usuário</label>
        </div>
        <div className="register-box">
          <input type="text" required />
          <label>E-mail</label>
        </div>
        <div className="register-box">
          <input type="text" required />
          <label>CPF</label>
        </div>
        <div className="register-box">
          <input type="password" required />
          <label>Senha</label>
        </div>
        <div className="register-box">
          <input type="password" required />
          <label>Confirmar Senha</label>
        </div>
        <div>
          <a href="/index" className="seta">
            →
          </a>
        </div>
        <div>
          <a href="/login" className="login">
            Fazer Login
          </a>
        </div>
      </div>
      <div className="ibage"></div>
    </div>
  );
}

export default Register;
