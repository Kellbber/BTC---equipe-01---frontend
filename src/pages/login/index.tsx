import * as S from "./style";

const Login = () => {
  return (
    <S.logincss>
      <main>
        <S.header>
          <S.h1>Coluna reta</S.h1>
        </S.header>
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
