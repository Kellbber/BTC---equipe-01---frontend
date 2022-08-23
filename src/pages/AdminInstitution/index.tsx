import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Institution } from "types/Institution";
import { institutionService } from "../../services/institutionService";

import { userLoggedService } from "../../services/authService";
import * as S from "./style";
import Loading from "../../components/Loading";

const AdminConfig = () => {
  const [search, setSearch] = useState<string>("");
  const [showLoading, setShowLoading] = useState(false);

  const [institutions, setInstitutions] = useState<Institution[]>([]);

  const filteredInst =
    search.length > 0
      ? institutions.filter((institution) => institution.name.includes(search))
      : [];
  const navigate = useNavigate();
  interface User {
    id: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
  }
  const [userLogged, setUserLogged] = useState<User>({
    id: "",
    password: "",
    confirmPassword: "",
    email: "",
    role: "",
  });

  const getUserLogged = async () => {
    setShowLoading(true);
    const response = await userLoggedService.userLogged();
    setUserLogged(response?.data);

  };
console.log(isPermited())
  const jwt = localStorage.getItem("jwt");
  const getAllInst = async () => {
    if (jwt) {
      const response = await institutionService.allInstitution();
      setShowLoading(true);

      if (response) {
        setInstitutions(response.data);
      }
      setShowLoading(false);
    }
  };
  function isPermited(){
    const isPermit = userLogged.role
    if(isPermit==="ADMIN"|| isPermit=== "BACKOFFICE"){
      return true;
    }
    else{
      return false;
    }
  }
  function goToDetails(id: string) {
    navigate(`/instituicao/detalhes/${id}`);
  }

  useEffect(() => {
    getAllInst();
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
            placeholder="Digite o nome da instituição..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </S.adminSearch>
      {isPermited()?
          <S.addButton onClick={() => navigate("/forminstituicao")}>
            Adicionar
          </S.addButton>
:""}
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
                    <div
                      className="divmain"
                      key={institution.name}
                      onClick={() => {
                        goToDetails(institution.id ?? "");
                      }}
                    >
                      <div>{institution.name}</div>
                      <div>{institution.phone}</div>
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
                {institutions.map((institution) => {
                  return (
                    <div
                      className="divmain"
                      key={institution.name}
                      onClick={() => {
                        goToDetails(institution.id ?? "");
                      }}
                    >
                      <div>{institution.name}</div>
                      <div>{institution.phone}</div>
                      <div>{institution.cep}</div>
                    </div>
                  );
                })}
              </S.divTable>
            </S.itemList>
          )}
        </S.searchList>
      </S.content>
      {showLoading ? <Loading /> : "none"}
    </S.background>
  );
};

export default AdminConfig;
