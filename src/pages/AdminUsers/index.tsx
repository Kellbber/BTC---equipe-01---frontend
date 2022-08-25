import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { User } from "types/User";
import Loading from "../../components/Loading";
import { userLoggedService } from "../../services/authService";
import { userApiService } from "../../services/userService";
import * as S from "./style";

interface UserLogged {
  id: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}
interface UserAll{
  users: User[];
  totalPages: number;
}
const AdminUsers = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState<string>("");

  const [users, setUsers] = useState<UserAll>();
  const [showLoading, setShowLoading] = useState(true);
  const [page, setPage] = useState<number>(1);
  const [userLogged, setUserLogged] = useState<UserLogged>({
    id: "",
    password: "",
    confirmPassword: "",
    email: "",
    role: "",
  });
  const getUserLogged = async () => {
    const response = await userLoggedService.userLogged();
    setUserLogged(response?.data);
  };
  const filteredUsers =
    search.length > 0 ? users?.users.filter((user) => user.name.includes(search)) : [];

  const jwt = localStorage.getItem("jwt");

  const getAllUsers = async ()   => {

    if (jwt) {
      const response = await userApiService.allUsers(page);
      if (response) {
        setUsers(response?.data);
      }
      setShowLoading(false);
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
      {!showLoading?
      <S.content>
        <S.adminSearch>
          <input
            type="text"
            placeholder="Digite o nome do usuário..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </S.adminSearch>
        <S.searchList>
          {search.length > 0 ? (
            <S.itemList>
              <S.nameTable>
                <p>Nome</p>
                <p>Email</p>
              </S.nameTable>
              <S.divTable>
                {filteredUsers?.map((user) => {
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
                {users?.users.map((user) => {
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
      :""}
      {showLoading?
         <Loading/>
      :""}
    </S.background>
  );
};

export default AdminUsers;
