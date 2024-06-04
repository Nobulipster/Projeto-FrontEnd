import { useState } from 'react';
import './App.css';


function App() {

  return (
      <form className='Registro'>
        <h1>Login</h1>
        <div className="register-box">
          <input type="text" name='' required />
          <label>E-mail</label>
        </div>
        <div className="register-box">
          <input type="password" name='' required />
          <label>Senha</label>
        </div>
        <div>
          <a href="#" className='seta'>→</a>
        </div>
        <div>
          <a href="#" className="conta">Criar Conta</a>
        </div>
        <div>
          <a href="#" className="esqueceu">Esqueceu a Senha?</a>
        </div>
      </form>
  )
}

export default App