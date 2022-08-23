import {  useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import swall from "sweetalert";
import * as S from "./style";
import Loading from "../../components/Loading";

import { userLoggedService } from "../../services/authService";
const AdminPage = () => {
  const [showLoading, setShowLoading] = useState(false);
  const navigate = useNavigate();
const jwt = localStorage.getItem('jwt')
interface User {
  id: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
  name:string;
}
const [userLogged, setUserLogged] = useState<User>({
  id: "",
  password: "",
  confirmPassword: "",
  email: "",
  role: "",
  name:"",
});

const getUserLogged = async () => {
  setShowLoading(true);
  const response = await userLoggedService.userLogged();
  setUserLogged(response?.data);
};

  function logout() {
    localStorage.removeItem(`jwt`);
    swall({
      title: "Certo!",
      text: "Deslogado com sucesso!",
      icon: "success",
      timer: 3000,
    });
    navigate("/");
  }

  if(!jwt){
    swall({
      title: "ERRO",
      text: "Necessário estar logado!",
      icon: "error",
      timer: 3000,
    });
    navigate("/login");
  }
  return (
    <S.background>
      <S.heading>
        <S.iconConfig>
          <p>
            Coluna
            <img />
            Reta
          </p>
        </S.iconConfig>
        <S.logins>
          <BiLogOut cursor="pointer" size={30} onClick={logout} />
        </S.logins>
      </S.heading>
      <S.title>Bem-vindo(a),</S.title>
      <S.nameUser>{userLogged.name}</S.nameUser>
      <S.options>O que gostaria de fazer?</S.options>
      {userLogged.role === "ADMIN" || "BACKOFFICE" ? (
        <S.cardOptions>
          <S.cardOptionsUnique>
            <p>Instituições</p>
            <a onClick={() => navigate("/instituicoes")}>Ver todos</a>

            <S.divSeparator />
          </S.cardOptionsUnique>
          <S.cardOptionsUnique>
            <p>Alunos</p>

            <a onClick={() => navigate("/alunos")}>Ver todos</a>
            <S.divSeparator />
          </S.cardOptionsUnique>
          {userLogged.role === "ADMIN" ? (
            <S.cardOptionsUnique>
              <p>Usuários</p>

              <a onClick={() => navigate("/usuarios")}>Ver todos</a>
              <S.divSeparator />
            </S.cardOptionsUnique>
          ) : (
            ""
          )}
        </S.cardOptions>
      ) : (
        ""
      )}
      {showLoading ? <Loading /> : ""}
    </S.background>
  );
};

export default AdminPage;
