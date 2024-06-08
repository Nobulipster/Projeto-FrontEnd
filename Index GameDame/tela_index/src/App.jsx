import { useState } from 'react'
import './App.css'
import './Navbar.css'
import './Grid.css'

function App() {

  return (
    <div className='tela'>

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

      <div class="container">

        <div className='seta-completa'>
          <div className='seta'>/</div>
          <div className='seta' id='seta2'>\</div>
        </div>

        <div id="Cesaoo">
          <div className='inter-Contain' id="c2">
            <img src="./src/img/DaysGone.png" alt='img 2'/>
              <div className='price-box'>R$ 169,90</div>
              <div className='discount'>-15%</div>
          </div>
          <div className='inter-Contain' id="c3">
            <img src="./src/img/Horizon.png" alt='img 3' />
              <div className='price-box'>R$ 149,99</div>
              <div className='discount'>-25%</div>
          </div>
        </div>
        <div className='inter-Contain' id="c1">
          <img src="./src/img/GoW.png" alt='img 1' />
            <div className='price-box-main'>R$ 119,95</div>
            <div className='discount-main'>-40%</div>
        </div>

        <div className='seta-completa'>
          <div className='seta'>\</div>
          <div className='seta'>/</div>
        </div>
      
      </div>

      <div className='index-releases'>

        <div className='gallery-wrapper'>

          <p>Lançamentos</p>
          <div className='gallery'>
            <div className='gallery-space'>
             <img src="./src/img/bob.png" alt="game1" />
             <div className='price-box'>R$ 299,00</div>
            </div>
            <div className='gallery-space'>
             <img src="./src/img/mars.png" alt="game2" />
             <div className='price-box'>R$ 299,00</div>
            </div>
            <div className='gallery-space'>
             <img src="./src/img/spell.png" alt="game3" />
             <div className='price-box'>R$ 299,00</div>
            </div>
            <div className='gallery-space'>
             <img src="./src/img/kojima.png" alt="game4" />
             <div className='price-box'>R$ 299,00</div>
            </div>
            <div className='gallery-space'>
             <img src="./src/img/perish.png" alt="game5" />
             <div className='price-box'>R$ 299,00</div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default App
