import { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { listaUser } from "../../mocks/users";

const AdminUsers = () => {
  const [search, setSearch] = useState<string>("");

  const filteredUsers =
    search.length > 0
      ? listaUser.filter((user) => user.name.includes(search))
      : [];

  const navigate = useNavigate();

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
            onClick={() => navigate("/admin")}
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
        <S.searchList>
          {search.length > 0 ? (
            <S.itemList>
              <S.nameTable>
                <p>Nome</p>
                <p>Email</p>
                <p>Vinculado a</p>
              </S.nameTable>
              <S.divTable>
                {filteredUsers.map((user) => {
                  return (
                    <div className="divmain" key={user.name}>
                      <div>{user.name}</div>
                      <div>{user.email}</div>
                      <div>{user.institution[0].name}</div>
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
                <p>Vinculado a</p>
              </S.nameTable>
              <S.divTable>
                {listaUser.map((user) => {
                  return (
                    <div className="divmain" key={user.name}>
                      <div>{user.name}</div>
                      <div>{user.email}</div>
                      <div>{user.institution[0].name}</div>
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
