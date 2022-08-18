import * as S from "./style";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
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
          onClick={() => navigate('/')}
        />
      </S.heading>

      <section className="containerlogin">
        <S.LoginSection>
          <S.loginborder>
            <S.p>Fazer login</S.p>
          </S.loginborder>
          <S.div>
            <input type="email" placeholder="Email:" />
            <input type="password" placeholder="Senha:" />
            <button>
              <p onClick={() => navigate('/dashboard')}>Entrar</p>
            </button>
            <a onClick={()=>navigate('/createuser')}>Não possui conta? Clique aqui</a>
          </S.div>
        </S.LoginSection>
      </section>
    </S.logincss>
  );
};
export default Login;
