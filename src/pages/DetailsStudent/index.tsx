import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { StudentComplete } from "types/StudentFindOne";
import { studentService } from "../../services/studentService";

const DetailsStudent = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [aluno, setAluno] = useState<StudentComplete>();

  const getOneStudent = async () => {
    if (id) {
      const get = await studentService.oneStudent(id);
      setAluno(get?.data);
    }
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
      </S.divMain>
     </S.content>
    </S.background>
  );
};

export default DetailsStudent;
