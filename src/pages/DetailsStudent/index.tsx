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
  const [showLoading, setShowLoading] = useState(false);
  const [aluno, setAluno] = useState<StudentComplete>();

  const getOneStudent = async () => {
    setShowLoading(true);
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
     <S.content>
      <S.divMain>
        <S.Title>{aluno?.name}</S.Title>
        <S.divButtons>
          
        <S.buttonEdit onClick={()=> navigate(`/formaluno/${id}`)}>
          Editar
        </S.buttonEdit>

        </S.divButtons>
        <S.Details>Detalhes</S.Details>
        <S.titleInfo><p>Nome</p><p>Idade</p><p>Telefone</p><p>Instituição</p></S.titleInfo>
         <S.cardDetails>
          <S.uniqueCard>{aluno?.name}</S.uniqueCard>
          <S.uniqueCard>{aluno?.age}</S.uniqueCard>
          <S.uniqueCard>{aluno?.phone}</S.uniqueCard>
          <S.uniqueCard>{aluno?.institution.name}</S.uniqueCard>
         </S.cardDetails>

         <S.Details>
          Consultas
         </S.Details>
         <S.titleInfo><p>Hora</p><p>Cronograma</p></S.titleInfo>
         <S.cardDetailsConsult>
          {aluno?.consult?aluno?.consult.find((consulta,index)=>(
            <S.uniqueCardConsult key={index} >
              <div>{consulta}</div>
            </S.uniqueCardConsult>
          )): <S.uniqueCardConsult>
            <p>Aluno não possui consultas</p>
            </S.uniqueCardConsult>}
         </S.cardDetailsConsult>
      </S.divMain>
     </S.content>
     {showLoading?
         <Loading/>
      :""}
    </S.background>
  );
};

export default DetailsStudent;
