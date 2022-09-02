import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { StudentComplete } from "types/StudentFindOne";
import Loading from "../../components/Loading";
import { studentService } from "../../services/studentService";
import Modal from 'react-modal'
import swall from 'sweetalert'
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "28%",
  },
};
Modal.setAppElement("#root");
import * as S from "./style";

const DetailsStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(true);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [aluno, setAluno] = useState<StudentComplete>();

  localStorage.setItem("idStudent", id??"");

  const getOneStudent = async () => {
      const get = await studentService.oneStudent(id??"");
      setAluno(get?.data);

    setShowLoading(false);

    
  };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
                  <S.buttonsHistoric>
                  <S.buttonEdit onClick={() => navigate(`/formaluno/${id}`)}>
                Editar
              </S.buttonEdit>
              <S.buttonDelete onClick={openModal}>
                Deletar
              </S.buttonDelete>
                  </S.buttonsHistoric>

                </S.uniqueCard>
              </S.cardDetails>
            </S.divStudentDetails>
            <S.divStudentHistoric>
              {aluno?.followUp?.map((historic, index) => (
                <S.cardDetails key={index}>
                  <S.uniqueCardHistoric>
                    <p>consulta</p> {historic.startDate}
                    <S.addHistoric onClick={()=> {navigate(`/historico/detalhes/${historic.id}`)}}>Visualizar</S.addHistoric>
                  </S.uniqueCardHistoric>
                  
                  <S.division />
                </S.cardDetails>
              ))}

              <S.addHistoric onClick={()=> {navigate('/agendar'); }}>Agendar Consulta</S.addHistoric>
            </S.divStudentHistoric>
          </S.organize>
        </S.content>
      ) : (
        ""
      )}
       <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <S.formDelete>
          <p>Deseja realmente deletar?</p>
          <S.buttonsHistoric>
            <button
              onClick={() => {
                studentService.deleteStudent(id ?? "");
                swall({
                  title: "Aluno Deletado!",
                  icon: "success",
                  timer: 3000,
                });
                navigate(`/alunos`);
              }}
            >
              SIM
            </button>
            <button onClick={closeModal}>NÃO</button>
          </S.buttonsHistoric>
        </S.formDelete>
      </Modal>
      {showLoading ? <Loading /> : ""}
      
    </S.background>
    
  );
};

export default DetailsStudent;
