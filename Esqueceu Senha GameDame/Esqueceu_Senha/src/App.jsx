import { useState } from 'react';
import './App.css';


function App() {

  return (
      <form className='Registro'>
        <h1>Recuperar Conta</h1>
        <div className="register-box">
          <input type="text" name='' required />
          <label>E-mail</label>
        </div>
        <div>
          <a href="#" className='seta'>→</a>
        </div>
        <div>
          <a href="#" className="conta">Criar Conta</a>
        </div>
        <div>
          <a href="#" className="fazerLogin">Fazer Login</a>
        </div>
      </form>
  )
}

export default App