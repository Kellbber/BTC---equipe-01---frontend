import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Institution } from "types/Institution";
import { institutionService } from "../../services/institutionService";
import { MdFirstPage, MdLastPage } from "react-icons/md";

import { userLoggedService } from "../../services/authService";
import * as S from "./style";
import Loading from "../../components/Loading";

const AdminConfig = () => {
  const [search, setSearch] = useState<string>("");
  const [showLoading, setShowLoading] = useState(true);
  const [page, setPage] = useState<number>(1);
  const [control, setControl] = useState<boolean>(false);
  const [institutions, setInstitutions] = useState<InstitutionAll>();

  const filteredInst =
    search.length > 0
      ? institutions?.institutions.filter((institution) =>
          institution.name.includes(search)
        )
      : [];

  interface InstitutionAll {
    institutions: Institution[];
    totalPages: number;
  }
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
    const response = await userLoggedService.userLogged();
    setUserLogged(response?.data);
  };

  const jwt = localStorage.getItem("jwt");

  function goToDetails(id: string) {
    navigate(`/instituicao/detalhes/${id}`);
  }

  const getAllInst = async () => {
    setShowLoading(true);
    if (jwt) {
      const response = await institutionService.allInstitution(page);
      if (response) {
        setInstitutions(response.data);
      }
      setShowLoading(false);
      setControl(false);
    }
  };
  const totalPage: number | undefined = institutions?.totalPages;

  function displayButton() {
    if (totalPage) {
      if (totalPage > page) {
        return true;
      } else {
        return false;
      }
    }
  }
  function isPermited() {
    const isPermit = userLogged.role;
    if (isPermit === "ADMIN" || isPermit === "BACKOFFICE") {
      return true;
    } else {
      return false;
    }
  }

  useEffect(() => {
    getAllInst();
    getUserLogged();
  }, [control]);

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
      {!showLoading ? (
        <S.content>
          <S.adminSearch>
            <input
              type="text"
              placeholder="Digite o nome da instituição..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </S.adminSearch>
          {isPermited() ? (
            <S.divButtonAdd>
              <S.addButton onClick={() => navigate("/forminstituicao")}>
                <p>Adicionar</p>
              </S.addButton>
            </S.divButtonAdd>
          ) : (
            ""
          )}

          <S.searchList>
            {search.length > 0 ? (
              <S.itemList>
                <S.nameTable>
                  <p>Nome</p>
                  <p>CEP</p>
                  <p>Telefone</p>
                </S.nameTable>
                <S.divTable>
                  {filteredInst?.map((institution, index) => {
                    return (
                      <div className="divmain" key={index}
                      onClick={() => {
                        goToDetails(institution.id ?? "");
                      }}>
                        <div>{institution.name}</div>
                        <div>{institution.cep}</div>
                        <div>{institution.phone}</div>
                      </div>
                    );
                  })}
                </S.divTable>
              </S.itemList>
            ) : (
              <S.itemList>
                <S.nameTable>
                  <p>Nome</p>
                  <p>CEP</p>
                  <p>Telefone</p>
                </S.nameTable>
                <S.divTable>
                  {institutions?.institutions.map((inst, index) => (
                    <div key={index}
                    className="divmain"
                    onClick={() => {
                      goToDetails(inst.id ?? "");
                    }}>
                      <div>{inst.name}</div>
                      <div>{inst.cep}</div>
                      <div>{inst.phone}</div>
                    </div>
                  ))}
                </S.divTable>
              </S.itemList>
            )}
          </S.searchList>
          {displayButton() ? (
            <MdLastPage
            size={25}
            color="2EA8DC"
            cursor="pointer"
              onClick={() => {
                setPage(page + 1);
                setControl(true);
              }}
            >
            
            </MdLastPage>
          ) : (
            ""
          )}
          {page === 1 ? (
            ""
          ) : (
            <MdFirstPage
              size={25}
              color="2EA8DC"
              cursor="pointer"
              onClick={() => {
                setPage(page - 1);
                setControl(true);
              }}
            ></MdFirstPage>
          )}
        </S.content>
      ) : (
        ""
      )}
      {showLoading ? <Loading /> : ""}
    </S.background>
  );
};

export default AdminConfig;
