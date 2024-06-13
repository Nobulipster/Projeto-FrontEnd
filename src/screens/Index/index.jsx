import "./style.css";
import { NavigatorBar } from "../../components/components";
import imgGow from '../../assets/img/GoW.png'
import imgDays from '../../assets/img/DaysGone.png'
import imgHorizon from '../../assets/img/Horizon.png'
import imgBob from '../../assets/img/bob.png'
import imgMars from '../../assets/img/mars.png'
import imgSpell from '../../assets/img/spell.png'
import imgKojima from '../../assets/img/kojima.png'
import imgPerish from '../../assets/img/perish.png'

function Index() {
  return (
    <div className="tela">
      <NavigatorBar />
      <div class="container">
        <div className="seta-completa">
          <div className="seta" id="seta1">/</div>
          <div className="seta">\</div>
        </div>

        <div id="Cesaoo">
          <div className="inter-Contain" id="c2">
            <img src={imgDays} alt="img 2" />
            <div className="price-box">R$ 169,90</div>
            <div className="discount">-15%</div>
          </div>
          <div className="inter-Contain" id="c3">
            <img src={imgHorizon} alt="img 3" />
            <div className="price-box">R$ 149,99</div>
            <div className="discount">-25%</div>
          </div>
        </div>
        <div className="inter-Contain" id="c1">
          <img src={imgGow} alt="img 1" />
          <div className="price-box-main">R$ 119,95</div>
          <div className="discount-main">-40%</div>
        </div>

        <div className="seta-completa">
          <div className="seta" id="seta2">\</div>
          <div className="seta">/</div>
        </div>
      </div>

      <div className="index-releases">
        <div className="gallery-wrapper">
          <p>Lançamentos</p>
          <div className="gallery">
            <div className="gallery-space">
              <img src={imgBob} alt="game1" />
              <div className="price-box">R$ 299,00</div>
            </div>
            <div className="gallery-space">
              <img src={imgMars} alt="game2" />
              <div className="price-box">R$ 299,00</div>
            </div>
            <div className="gallery-space">
              <img src={imgSpell} alt="game3" />
              <div className="price-box">R$ 299,00</div>
            </div>
            <div className="gallery-space">
              <img src={imgKojima} alt="game4" />
              <div className="price-box">R$ 299,00</div>
            </div>
            <div className="gallery-space">
              <img src={imgPerish} alt="game5" />
              <div className="price-box">R$ 299,00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
