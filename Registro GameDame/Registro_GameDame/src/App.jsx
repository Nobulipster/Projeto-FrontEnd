import { useState } from 'react';
import './App.css';


function App() {

  return (
    <div className='container'>
      <form className='Registro'>
        <h1>Registrar</h1>
        <div className="register-box">
          <input type="text" name='' required />
          <label>Nome do Usuário</label>
        </div>
        <div className="register-box">
          <input type="email" name='' required />
          <label>E-mail</label>
        </div>
        <div className="register-box">
          <input type="number" name='' required />
          <label>CPF</label>
        </div>
        <div className="register-box">
          <input type="password" name='' required />
          <label>Senha</label>
        </div>
        <div className="register-box">
          <input type="password" name='' required />
          <label>Confirmar Senha</label>
        </div>
        <div>
          <a href="#" className='seta'>→</a>
        </div>
        <div>
          <a href="#" className="login">Fazer Login</a>
        </div>
      </form>
    </div>
  )
}

export default App