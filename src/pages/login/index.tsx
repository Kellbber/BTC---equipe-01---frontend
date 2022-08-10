import * as S from "./style";

const Login = () => {
  return (
    <S.logincss>
      <main>
        <S.heading>
          <S.iconConfig>
            <p>
              Coluna
              <img />
              Reta
            </p>
          </S.iconConfig>
        </S.heading>
        <S.LoginSection>
          <S.loginborder></S.loginborder>
          <S.LoginInput
            type="text"
            name="name"
            id="name"
            placeholder="name"
            required
          />
          <S.p>Fazer login</S.p>
          <S.LoginInput
            type="text"
            name="email"
            id="email"
            placeholder="Email:"
            required
          />
        </S.LoginSection>
      </main>
    </S.logincss>
  );
};
export default Login;
