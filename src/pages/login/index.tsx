import * as S from "./style";

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
      </S.heading>
      <section className="containerlogin">
        <S.LoginSection>
          <S.loginborder>
            <S.p>Fazer login</S.p>
          </S.loginborder>
          <S.div>
            <input type="email" placeholder="Digite seu email aqui" />
            <input type="text" placeholder="Digite seu nome aqui" />
          </S.div>
        </S.LoginSection>
      </section>
    </S.logincss>
  );
};
export default Login;
