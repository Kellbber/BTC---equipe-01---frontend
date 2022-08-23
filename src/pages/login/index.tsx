import * as S from "./style";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { loginService } from "../../services/authService";
import swall from "sweetalert";
import { useLocalStorage } from 'react-use';
import SendButton from "../../components/SendButton";
import Loading from "../../components/Loading";
const Login = () => {
  const navigate = useNavigate();
    const [showLoading, setShowLoading] = useState(false);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  interface userLoginObjt {
    email: string;
    password: string;
  }
  const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: userLoginObjt) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const loginUser = async (event: React.BaseSyntheticEvent) => {
    event.preventDefault();
    setShowLoading(true);
    const response = await loginService.login(values);
    setShowLoading(false);

    const jwt = response?.data.token;
    if (jwt) {
        localStorage.setItem("jwt",jwt);
        localStorage.setItem("userName", response.data.user.name)
      swall({
        title: "Seja Bem-vindo!",
        icon: "success",
        timer: 3000,
      });

      navigate(`/dashboard`);
    }
  };

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
          onClick={() => navigate("/")}
        />
      </S.heading>

      <section className="containerlogin">
        <S.LoginSection>
          <S.loginborder>
            <S.p>Fazer login</S.p>
          </S.loginborder>
          <S.div onSubmit={loginUser}>
            <input
              type="email"
              placeholder="Email:"
              name="email"
              required
              onChange={handleChangeValues}
            />
            <input
              type="password"
              placeholder="Senha:"
              name="password"
              required
              onChange={handleChangeValues}
            />
            <SendButton />
            <a onClick={() => navigate("/createuser")}>
              Não possui conta? Clique aqui
            </a>
          </S.div>
        </S.LoginSection>
      </section>
      {showLoading?
         <Loading/>
      :""}
    </S.logincss>
  );
};
export default Login;
