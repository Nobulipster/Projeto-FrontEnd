import { useState } from 'react'
import './App.css'
import './Navbar.css'
import './Carrossel.css'

function App() {

  return (
    <div className='container'>

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

      <div className='carrossel'>
        <div className='slides'>

          {/* Radio Buttons */}
          <input type="radio" name='radio-btn' id='radio1' />
          <input type="radio" name='radio-btn' id='radio2' />
          <input type="radio" name='radio-btn' id='radio3' />
          {/* Fim Radio Buttons */}

          {/* Slide Images */}
          <div className='slide first'>
            <img src="./src/img/GoW.png" alt='img 1' />
          </div>
          <div className='slide'>
            <img src="./src/img/DaysGone.png" alt='img 2' />
          </div>
          <div className='slide'>
            <img src="./src/img/Horizon.png" alt='img 3' />
          </div>
          {/* Fim Slide Images */}

          {/* Navigation Auto */}
          <div className='navigation-auto'>
            <div className='auto-btn1'></div>
            <div className='auto-btn2'></div>
            <div className='auto-btn3'></div>
          </div>

        </div>

        <div className='manual-navigation'>
          <label htmlFor="radio1" className='manual-btn'></label>
          <label htmlFor="radio2" className='manual-btn'></label>
          <label htmlFor="radio3" className='manual-btn'></label>
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
