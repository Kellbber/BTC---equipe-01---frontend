import { useEffect, useState } from "react";
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import Loading from "../../components/Loading";
import swall from 'sweetalert'
import { userLoggedService } from "../../services/authService";
const AdminPage = () => {
  const [userLogged, setUserLogged] = useState<User>({
    id: "",
    password: "",
    confirmPassword: "",
    email: "",
    role: "",
    name: "",
  });

  const [showLoading, setShowLoading]=useState<boolean>(true);

  const getUserLogged = async () => {
    const response = await userLoggedService.userLogged();
    setUserLogged(response?.data);
    setShowLoading(false);
  };

  interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
  }
  function isPermited(){
    const isPermit = userLogged.role
    if(isPermit==="ADMIN"){
      return true;
    }
    else{
      return false;
    }
  }
  const name = localStorage.getItem("userName");
  const navigate = useNavigate();
function logout(){
  localStorage.removeItem("jwt");
  localStorage.removeItem("userName");
  swall({
    title: `Até a próxima, ${name}!`,
    icon: "success",
    timer: 3000,
  });

  navigate(`/`);

}
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
          <BiLogOut cursor="pointer" size={30} onClick={logout} />
        </S.logins>
      </S.heading>
      <S.title>Bem-vindo(a),</S.title>
      <S.nameUser>{name}</S.nameUser>
      <S.options>O que gostaria de fazer?</S.options>
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
          {isPermited()?
            <S.cardOptionsUnique>
              <p>Usuários</p>
              <a onClick={() => navigate("/usuarios")}>Ver todos</a>
              <S.divSeparator />
            </S.cardOptionsUnique>

        :""}
        </S.cardOptions>
        {showLoading ? <Loading /> : ""}
    </S.background>
  );
};

export default AdminPage;
