import * as S from "./style";
import { BiArrowBack } from "react-icons/bi";
import { useState} from "react";
import { Institutions } from "../../mocks/institutions";
import { useNavigate } from "react-router-dom";

const AdminConfig = () => {
  const [search, setSearch] = useState<string>("");

  const filteredInst =
    search.length > 0
      ? Institutions.filter((institution) => institution.name.includes(search))
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
          <BiArrowBack cursor="pointer" size={30} onClick={()=>navigate('/admin')}/>
        </S.logins>
      </S.heading>
      <S.content>
        <S.adminSearch>
          <input
            type="text"
            placeholder="Digite o nome da instituição..."
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
              </S.nameTable>
              <S.divTable>
                {filteredInst.map((institution) => {
                  return (
                    <div className="divmain" key={institution.name}>
                      <div>{institution.name}</div>
                      <div>{institution.fone}</div>
                      <div>{institution.cep}</div>
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
              </S.nameTable>
              <S.divTable>
                {Institutions.map((institution) => {
                  return (
                    <div className="divmain" key={institution.name}>
                      <div>{institution.name}</div>
                      <div>{institution.fone}</div>
                      <div>{institution.cep}</div>
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
