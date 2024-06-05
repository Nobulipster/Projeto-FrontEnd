import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="./src/img/token.png" alt="Logo" width={100} height={100} />
        </div>
        <ul className="nav-links-desktop">
          <li><a href="releases">Lançamentos</a></li>
          <li><a href="popular">Populares</a></li>
          <li><a href="genre">Gêneros</a></li>
          <li><a href="promotions">Promoções</a></li>
          <li><a href="account">Conta</a></li>
        </ul>
        <input type="text" name='' placeholder='' />
        <a href="#" className='search'>🔍︎</a>
      </nav>
      <div className='container'>
        <div className='cadastrar'>
          <h2>Cadastrar Jogo</h2>
          <div className='text-box'>
            <input type="text" name='' placeholder='Título do jogo' />
          </div>
          <div className='text-box'>
            <input type="text" name='' placeholder='Gênero' />
          </div>
          <div className='text-box' id='description'>
            <input type="text" name='' placeholder='Descrição' />
          </div>
          <div className='text-box'>
            <input type="text" name='' placeholder='Imagem' />
          </div>
          <div className='text-box'>
            <button>Cadastrar</button>
          </div>
        </div>
        <div className='remover'>
          <h2>Remover Jogo</h2>
          <div className='text-box'>
            <input type="text" placeholder='Título do jogo ou ID' />
          </div>
          <div className='text-box'>
            <button>Remover</button>
          </div>
        </div>
        <div className='editar'>
          <h2>Editar Jogo</h2>
          <div className='text-box'>
            <input type="text" name='' placeholder='Título do jogo' />
          </div>
          <div className='text-box'>
            <input type="text" name='' placeholder='Gênero' />
          </div>
          <div className='text-box' id='description'>
            <input type="text" name='' placeholder='Descrição' />
          </div>
          <div className='text-box'>
            <input type="text" name='' placeholder='Imagem' />
          </div>
          <div className='text-box'>
            <button>Modificar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
