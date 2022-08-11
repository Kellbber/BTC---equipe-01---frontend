import * as S from "./style";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <S.logincss>
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
          onClick={() => useNavigate()}
        />
      </S.heading>

      <section className="containerlogin">
        <S.LoginSection>
          <S.loginborder>
            <S.p>Fazer login</S.p>
          </S.loginborder>
          <S.div>
            <input type="email" placeholder="Digite seu email aqui" />
            <input type="text" placeholder="Digite sua senha aqui" />
            <button>
              <p>Entrar</p>
            </button>
          </S.div>
        </S.LoginSection>
      </section>
    </S.logincss>
  );
};
export default Login;
