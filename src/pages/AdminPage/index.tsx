import { useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { userLoggedService } from "../../services/authService";
import * as S from "./style";

const AdminPage = () => {
  const [userLogged, setUserLogged] = useState<User>({
    id: "",
    password: "",
    confirmPassword: "",
    email: "",
    role: "",
  });
  const getUserLogged = async () => {
    const response = await userLoggedService.userLogged();
    setUserLogged(response.data);
  };
  interface User {
    id: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
  }
  const navigate = useNavigate();

  useEffect(() => {
    getUserLogged();
  }, []);
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
          <BiLogOut cursor="pointer" size={30} onClick={() => navigate("/")} />
        </S.logins>
      </S.heading>
      <S.title>Bem-vindo(a),</S.title>
      <S.nameUser>{userLogged.role}</S.nameUser>
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
    </S.background>
  );
};

export default AdminPage;
