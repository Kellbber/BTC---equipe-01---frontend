import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { InstitutionComplete } from "types/InstitutionsFindOne";
import { Student } from "types/student";
import Loading from "../../components/Loading";
import { userLoggedService } from "../../services/authService";
import { institutionService } from "../../services/institutionService";
import * as S from "./style";

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
      {!showLoading ? (
        <S.content>
          <S.Details>Detalhes</S.Details>
          <S.organize>
            <S.divStudentDetails>
              <S.cardDetails>
                <S.uniqueCard>
                  <div>
                    <p>Nome</p>
                    {institution?.name}
                  </div>
                  <S.division />
                  <div>
                    <p>Telefone</p>
                    {institution?.phone}
                  </div>
                  <S.division />
                  <div>
                    <p>Endereço</p>
                    {institution?.street}
                  </div>
                  <S.division />
                  <div>
                    <p>Visualizar CEP</p>
                    <S.styleCep
                      href={`https://www.google.com.br/maps/place/${institution?.cep}`}
                      target="_blank"
                    >
                      {institution?.cep}
                    </S.styleCep>
                  </div>
                  <S.division />
                  <S.buttonEdit
                    onClick={() => navigate(`/forminstituicao/${id}`)}
                  >
                    Editar
                  </S.buttonEdit>
                </S.uniqueCard>
              </S.cardDetails>
            </S.divStudentDetails>
            <S.divStudentHistoric>
              <S.DetailsCard>Alunos</S.DetailsCard>
              {institution?.students.map((student: Student, index) => (
                <S.cardDetails key={index}>
                  <S.uniqueCardHistoric>
                    <p>Nome</p>
                    {student.name}
                    <p>Data Nasc</p>
                    {student.age}
                  </S.uniqueCardHistoric>
                  <S.division />
                </S.cardDetails>
              ))}
            </S.divStudentHistoric>
          </S.organize>
        </S.content>
      ) : (
        ""
      )}
      {showLoading ? <Loading /> : ""}
    </S.background>
  );
};

export default DetailsInstitution;
