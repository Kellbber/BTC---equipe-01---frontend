import * as S from "./style";
import { BiLogOut } from "react-icons/bi";
import { useState } from "react";
import { Institutions } from "../../mocks/institutions";
import {FiEdit} from 'react-icons/fi'
const AdminConfig = () => {
  const [search, setSearch] = useState<string>("");

  const filteredInst =
    search.length > 0
      ? Institutions.filter((institution) => institution.name.includes(search))
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
        </S.adminSearch>
        <S.searchList>
          {search.length > 0 ? (
            <S.itemList>
              <S.nameTable>
                <p>Nome</p>
                <p>Telefone</p>
                <p>Cep</p>
                <p>Editar</p>
              </S.nameTable>
              <S.divTable>
                {filteredInst.map((institution) => {
                  return (
                    <div key={institution.name}>
                      <div>{institution.name}</div>
                      <div>{institution.fone}</div>
                      <div>{institution.cep}</div>
                      <div><FiEdit size={15} cursor="pointer"/></div>
                    </div>
                    
                    
                  );
                })}
              </S.divTable>
            </S.itemList>
          ) : (
            <S.itemList>
              <S.nameTable>
                <p>Nome</p>
                <p>Telefone</p>
                <p>Cep</p>
                <p>Editar</p>
              </S.nameTable>
              <S.divTable>
                {Institutions.map((institution) => {
                  return (
                    <div key={institution.name}>
                      <div>{institution.name}</div>
                      <div>{institution.fone}</div>
                      <div>{institution.cep}</div>
                      <div><FiEdit size={15} cursor="pointer"/></div>
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

export default AdminConfig;
