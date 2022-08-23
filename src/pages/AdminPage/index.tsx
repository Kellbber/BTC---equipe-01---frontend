import { useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { userLoggedService } from "../../services/authService";
import swall from "sweetalert";
import * as S from "./style";
import Loading from "../../components/Loading";
import { useLocalStorage } from "react-use";
const AdminPage = () => {

  const [showLoading, setShowLoading] = useState(false);
  const [valueRole] = useLocalStorage('role');

  const [valueJwt]= useLocalStorage('jwt');
 
  const[name]=useLocalStorage<string>('userName');

  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem(`jwt`);
    localStorage.removeItem(`role`);
    swall({
      title: "Certo!",
      text: "Deslogado com sucesso!",
      icon: "success",
      timer: 3000,
    });
    navigate("/");
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
      <S.nameUser>{name}</S.nameUser>
      <S.options>O que gostaria de fazer?</S.options>
      {valueRole === "ADMIN" || "BACKOFFICE" ? (
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
          {valueRole === "ADMIN" ? (
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
