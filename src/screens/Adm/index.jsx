import "./style.css";
import { NavigatorBar } from "../../components/components";

function Adm() {
  return (
    <div className="allMain">
      <NavigatorBar />
      <div className="container">
        <div className="cadastrar">
          <h2>Cadastrar Jogo</h2>
          <div className="text-box">
            <input type="text" name="" placeholder="Título do jogo" />
          </div>
          <div className="text-box">
            <input type="text" name="" placeholder="Gênero" />
          </div>
          <div className="text-box" id="description">
            <input type="text" name="" placeholder="Descrição" />
          </div>
          <div className="img-box">
            <input type="text" name="" placeholder="Inserir imagem" />
          </div>
          <div className="button-box">
            <button>Cadastrar</button>
          </div>
        </div>
        <div className="remover">
          <h2>Remover Jogo</h2>
          <div className="text-box">
            <input type="text" placeholder="Título do jogo ou ID" />
          </div>
          <div className="button-boxR">
            <button>Remover</button>
          </div>
        </div>
        <div className="editar">
          <h2>Editar Jogo</h2>
          <div className="text-box">
            <input type="text" name="" placeholder="Título do jogo" />
          </div>
          <div className="text-box">
            <input type="text" name="" placeholder="Gênero" />
          </div>
          <div className="text-box" id="description">
            <input type="text" name="" placeholder="Descrição" />
          </div>
          <div className="img-box">
            <input type="text" name="" placeholder="Inserir imagem" />
          </div>
          <div className="button-box">
            <button>Modificar</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adm;
