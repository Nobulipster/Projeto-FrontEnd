import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <a href="logo-index">
          <img src="./src/img/token.png" alt="Logo" width={100} height={100} />
          </a>
        </div>
        <ul className="nav-links-desktop">
          <li><a href="releases">Lançamentos</a></li>
          <p>|</p>
          <li><a href="popular">Populares</a></li>
          <p>|</p>
          <li><a href="genre">Gêneros</a></li>
          <p>|</p>
          <li><a href="promotions">Promoções</a></li>
          <p>|</p>
          <li><a href="account">Conta</a></li>
        </ul>
        <input type="text" name='' placeholder='' />
        <a href="#" className='search'>🔍︎</a>
      </nav>
    </div>
  )
}

export default App
