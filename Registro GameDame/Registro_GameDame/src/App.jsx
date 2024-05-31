import { useState } from 'react';
import './App.css';


function App() {
  const [registro, setRegistro] = useState([
    {
      id: 1,
      text: "Nome de Usuário",
    },
    {
      id: 2,
      text: "E-mail",
    },
    {
      id: 3,
      text: "CPF",
    },
    {
      id: 4,
      text: "Senha",
    },
    {
      id: 5,
      text: "Confirmar Senha",
    },
  ])

  return (
    <div className="app">
      <h1>Registrar</h1>
      <div className="bloco-registro">
        {registro.map((registro) => (
          <div className="registro">
            <div className="content">
              <p>{registro.text}</p>
            </div>
          </div>
        ))}
        <div className="botao-seta">
          <button>→</button>
        </div>
        <div className="botao-login">
          <button>Fazer Login</button>
        </div>
      </div>
    </div>
  )
}

export default App
