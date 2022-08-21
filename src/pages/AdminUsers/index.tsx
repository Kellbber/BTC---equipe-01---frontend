import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import swall from "sweetalert";
import { User } from "types/User";
import { userApiService } from "../../services/userService";
import { userLoggedService } from "../../services/authService";

interface UserLogged {
  id: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}
const AdminUsers = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState<string>("");

  const [users, setUsers] = useState<User[]>([]);

  const [userLogged, setUserLogged] = useState<UserLogged>({
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
  const filteredUsers =
    search.length > 0 ? users.filter((user) => user.name.includes(search)) : [];

  const jwt = localStorage.getItem("jwt");

  const getAllUsers = async ()   => {
    if (jwt) {
      const response = await userApiService.allUsers();
      if (response) {
        setUsers(response?.data);
      }
    }
  };
useEffect(()=>{
  getUserLogged();
  getAllUsers();

},[])
  function goToDetails(id: string) {
    navigate(`/usuarios/detalhes/${id}`);
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
          <BiArrowBack
            cursor="pointer"
            size={30}
            onClick={() => navigate("/dashboard")}
          />
        </S.logins>
      </S.heading>
      <S.content>
        <S.adminSearch>
          <input
            type="text"
            placeholder="Digite o nome do usuário..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </S.adminSearch>
        {userLogged.role==="ADMIN"?
        <S.addButton onClick={() => navigate("/formusuario")}>
          Adicionar
        </S.addButton>
        :""}
        <S.searchList>
          {search.length > 0 ? (
            <S.itemList>
              <S.nameTable>
                <p>Nome</p>
                <p>Email</p>
              </S.nameTable>
              <S.divTable>
                {filteredUsers.map((user) => {
                  return (
                    <div
                      className="divmain"
                      key={user.name}
                      onClick={() => {
                        goToDetails(user.id ?? "");
                      }}
                    >
                      <div>{user.name}</div>
                      <div>{user.email}</div>
                    </div>
                  );
                })}
              </S.divTable>
            </S.itemList>
          ) : (
            <S.itemList>
              <S.nameTable>
                <p>Nome</p>
                <p>Email</p>
              </S.nameTable>
              <S.divTable>
                {users.map((user) => {
                  return (
                    <div
                      className="divmain"
                      key={user.name}
                      onClick={() => {
                        goToDetails(user.id ?? "");
                      }}
                    >
                      <div>{user.name}</div>
                      <div>{user.email}</div>
                    </div>
                  );
                })}
              </S.divTable>
            </S.itemList>
          )}
        </S.searchList>
      </S.content>
    </S.background>
  );
};

export default AdminUsers;
