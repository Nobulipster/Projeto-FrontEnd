import "./style.css";

function Login() {
  return (
    <div className="master">
      <div className="loginPrincipal">
        <div className="title">
          <h1>Login</h1>
        </div>
        <div className="login-box">
          <input type="text" required />
          <label>E-mail</label>
        </div>
        <div className="login-box">
          <input type="password" required />
          <label>Senha</label>
        </div>
        <div>
          <a href="#" className="seta">
            →
          </a>
        </div>
        <div>
          <a href="/" className="createAccount">
            Criar Conta
          </a>
        </div>
        <div>
          <a href="/forgot" className="forgotenPass">
            Esqueceu a Senha?
          </a>
        </div>
      </div>
      <div className="ibage"></div>
    </div>
  );
}

export default Login;
