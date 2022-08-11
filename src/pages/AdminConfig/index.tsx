import * as S from "./style";
import { BiLogOut } from "react-icons/bi";
import { useState } from "react";
import { listaUser } from "../../mocks/users";
import { Institutions } from "../../mocks/institutions";
import { students } from "../../mocks/students";
const AdminConfig = () => {
  const [icon, setIcon] = useState<boolean>(false);

  const [search, setSearch] = useState<string>("");

  const [selectValue, setSelectValue] = useState<string>("");
  interface User {
    id: string;
    name: string;
    email: string;
    institution: {
      id: string;
      name: string;
      students: {
        id: string;
        name: string;
      }[];
    }[];
  }

  const filteredUser =
    search.length > 0
      ? listaUser.filter((user) => user.name.includes(search))
      : [];

  function changeIcon() {
    if (icon) {
      setIcon(false);
    } else {
      setIcon(true);
    }
  }

  const filteredInst =
    search.length > 0
      ? Institutions.filter((institution) => institution.name.includes(search))
      : [];

  const filteredStudent =
    search.length > 0
      ? students.filter((student) => student.name.includes(search))
      : [];

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
          <BiLogOut cursor="pointer" size={30} />
        </S.logins>
      </S.heading>
      <S.content>
        <S.adminSearch>
          <input
            type="text"
            placeholder="Digite aqui..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <S.selectEntity icons={icon}>
            <select
              name="entity"
              id="entity"
              onClick={changeIcon}
              onChange={(e) => setSelectValue(e.currentTarget.value)}
              defaultValue={"default"}
            >
              <option value="default" disabled style={{display: "none"}}></option>
              <option>Instituição</option>
              <option>Usuário</option>
              <option>Aluno</option>
            </select>
           
          </S.selectEntity>
        </S.adminSearch>
        <S.searchList>

          
          {search.length > 0 && selectValue === "Usuário" ? (
            
              <S.itemList>
              {filteredUser.map((user: User) => {
                return <li key={user.name}>{user.name}</li>;
              })}
              </S.itemList>
            
          ) : (
            <S.itemList style={{display: selectValue==="Usuário"?"flex":"none"}}>
              {listaUser.map((user: User) => {
                    return <li key={user.name}>{user.name}</li>;
                  })
                }
            </S.itemList>
          )}
          
          {search.length > 0 && selectValue === "Instituição" ? (
            <S.itemList>
              {filteredInst.map((institution) => {
                return <li key={institution.name}>{institution.name}</li>;
              })}
            </S.itemList>
          ) : (
            <S.itemList style={{display: selectValue==="Instituição"?"flex":"none"}}>
              {Institutions.map((institution) => {
                    return <li key={institution.name}>{institution.name}</li>;
                  })
                }
            </S.itemList>
          )}
          
          {search.length > 0 && selectValue === "Aluno" ? (
            <S.itemList>
              {filteredStudent.map((student) => {
                return <li key={student.name}>{student.name}</li>;
              })}
            </S.itemList>
          ) : (
            <S.itemList style={{display: selectValue==="Aluno"?"flex":"none"}}>
              {students.map((student) => {
                    return <li key={student.name}>{student.name}</li>;
                  })
                }
            </S.itemList>
          )}
        </S.searchList>
      </S.content>
    </S.background>
  );
};

export default AdminConfig;
