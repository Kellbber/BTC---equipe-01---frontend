import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
const create = () => {
  const navigate = useNavigate();
  return (
    <S.createcss>
      <S.heading>
        <S.iconConfig>
          <p>
            Coluna
            <img />
            Reta
          </p>
        </S.iconConfig>
        <BiArrowBack
          className="BiArrowBack"
          cursor="pointer"
          size={30}
          onClick={() => navigate("/usuarios")}
        />
      </S.heading>
      <section className="containerregister">
        <S.registerSection>
          <S.registerborder>
            <S.p>Registro de usuário</S.p>
          </S.registerborder>
          <S.div>
            <input type="Email" placeholder="Email" />
            <input type="Email" placeholder="Confirmar email" />
            <input type="text" placeholder="Senha" />
            <button>
              <p>Criar usuário</p>
            </button>
          </S.div>
        </S.registerSection>
      </section>
    </S.createcss>
  );
};

export default create;
