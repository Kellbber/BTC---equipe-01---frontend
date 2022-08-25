import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { userLoggedService } from "../../services/authService";
import { InstitutionComplete } from "types/InstitutionsFindOne";
import { Student } from "types/student";
import { institutionService } from "../../services/institutionService";
import * as S from "./style";
import Loading from "../../components/Loading";

const DetailsInstitution = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(true);
  const [institution, setInstitution] = useState<InstitutionComplete>();
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

  const getOneInstitution = async () => {
 
    if (jwt) {
      if (id) {
        const get = await institutionService.oneInstitution(id);
        setInstitution(get?.data);
      }
      setShowLoading(false);
    }
  };

  useEffect(() => {
    getOneInstitution();
    getUserLogged();
  }, []);

  function isPermited() {
    const isPermit = userLogged.role;
    if (isPermit === "ADMIN" || isPermit === "BACKOFFICE") {
      return true;
    } else {
      return false;
    }
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
            onClick={() => navigate("/instituicoes")}
          />
        </S.logins>
      </S.heading>
    {!showLoading?
      <S.content>
        <S.divMain>
          <S.Title>{institution?.name}</S.Title>
          {isPermited() ? (
            <S.divButtons>
              <S.buttonEdit onClick={() => navigate(`/forminstituicao/${id}`)}>
                Editar
              </S.buttonEdit>
            </S.divButtons>
          ) : (
            ""
          )}

          <S.Details>Detalhes</S.Details>
          <S.titleInfo>
            <p>Cidade</p>
            <p>Complemento</p>
            <p>Bairro</p>
            <p>Telefone</p>
            <p>UF</p>
            <p>Endereço</p>
          </S.titleInfo>
          <S.cardDetails>
            <S.uniqueCard>{institution?.city}</S.uniqueCard>
            <S.uniqueCard>{institution?.complement}</S.uniqueCard>
            <S.uniqueCard>{institution?.district}</S.uniqueCard>
            <S.uniqueCard>{institution?.phone}</S.uniqueCard>
            <S.uniqueCard>{institution?.state}</S.uniqueCard>
            <S.uniqueCard>{institution?.street}</S.uniqueCard>
          </S.cardDetails>
          <S.styleCep
            href={`https://www.google.com.br/maps/place/${institution?.city}-${institution?.state},${institution?.cep}`}
            target="_blank"
          >
            {institution?.cep}
          </S.styleCep>
          <S.Details>Alunos</S.Details>
          <S.titleInfo>
            <p>Nome</p>
            <p>Data Nasc</p>
            <p>Telefone</p>
          </S.titleInfo>
          <S.cardDetailsStudent>
            {institution?.students.map((student: Student, index) => (
              <S.uniqueCardStudent key={index}>
                <div>{student.name}</div>
                <div>{student.age}</div>
                <div>{student.phone}</div>
              </S.uniqueCardStudent>
            ))}
          </S.cardDetailsStudent>
        </S.divMain>
      </S.content>
      :""}
      {showLoading ? <Loading /> : ""}
    </S.background>
  );
};

export default DetailsInstitution;
