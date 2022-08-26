import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { StudentComplete } from "types/StudentFindOne";
import { studentService } from "../../services/studentService";
import * as S from "./style";
import Loading from "../../components/Loading";
const DetailsStudent = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showLoading, setShowLoading] = useState(true);
  const [aluno, setAluno] = useState<StudentComplete>();

  const getOneStudent = async () => {
    if (id) {
      const get = await studentService.oneStudent(id);
      setAluno(get?.data);
    }
    setShowLoading(false);
  };
  useEffect(() => {
    getOneStudent();
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
            onClick={() => navigate("/alunos")}
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
                    <p>nome</p>
                    {aluno?.name}
                  </div>
                  <S.division />
                  <div>
                    <p>Data Nasc</p>
                    {aluno?.age}
                  </div>
                  <S.division />
                  <div>
                    <p>Telefone</p>
                    {aluno?.phone}
                  </div>
                  <S.division />
                  <div>
                    <p>Instituição</p>
                    {aluno?.institution.name}
                  </div>
                  <S.division />
                  <S.buttonEdit onClick={() => navigate(`/formaluno/${id}`)}>
                Editar
              </S.buttonEdit>
                </S.uniqueCard>
              </S.cardDetails>


            </S.divStudentDetails>
            <S.divStudentHistoric>
              {aluno?.followUp?.map((historic, index) => (
                <S.cardDetails key={index}>
                  <S.uniqueCardHistoric>
                    <p>consulta</p> {historic.startDate}
                    <S.addHistoric>Visualizar</S.addHistoric>
                  </S.uniqueCardHistoric>
                  <S.division />
                </S.cardDetails>
              ))}

              <S.addHistoric>Agendar Consulta</S.addHistoric>
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

export default DetailsStudent;
