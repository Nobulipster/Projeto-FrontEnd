import "./style.css";
import { NavigatorBar } from "../../components/components";
import imgHades from '../../assets/img/hades.png'
import imgHollow from '../../assets/img/hollow.png'
import imgDragon from '../../assets/img/dragon.png'
import imgMonster from '../../assets/img/monster.png'
import imgPen from '../../assets/img/pen.png'
import imgTrash from '../../assets/img/trash.png'


function Perfil() {
  return (
    <div className="cartMain">
      <NavigatorBar />
      <div className="subMain">
        <div className="data">
          <div className="dataBase">
            <h1>Olá, (Nome do Usuário)</h1>
            <h2>Seu email é nomeusuario@email.com</h2>
            <h2>Seu CPF é 123.456.789.00</h2>
            <button>
              <p>Alterar Dados</p>
              <img src={imgPen} alt="" />
            </button>
            <button>
              <p>Excluir Conta</p>
              <img src={imgTrash} alt="" />
            </button>
            <button id="b2">
              <a href="/admin">
                <p>Tela de Admin</p>
              </a>
            </button>
          </div>
        </div>
        <div className="biblio">
          <div className="titleBiblio">
            <h2>Jogos Adquiridos:</h2>
          </div>
          <div className="gridBiblio">
            <div className="frameBiblio">
              <img src={imgHades} alt="" />
              <p>100/100</p>
            </div>
            <div className="frameBiblio">
              <img src={imgHollow} alt="" />
              <p>99/100</p>
            </div>
          </div>
          <div className="gridBiblio">
            <div className="frameBiblio">
              <img src={imgDragon} alt="" />
              <p>70/100</p>
            </div>
            <div className="frameBiblio">
              <img src={imgMonster} alt="" />
              <p>Adicionar Avaliação</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Perfil;