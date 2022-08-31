import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import Modal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { historicService } from "../../services/historicService";
import * as S from "./style";

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

interface Historic {
  id?: string;
  firstPhoto: string;
  secondPhoto: string;
  startDate: string;
  returnDate: string;
  note: string;
  raiox:boolean;
  fisioterapia:boolean;
  colete:boolean;
  cirurgia:boolean;
  angulocob:boolean;
  studentId: string;
}

Modal.setAppElement("#root");

const DetailsHistoric = () => {
  const [historic, setHistoric] = useState<Historic>();

  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const [showLoading, setShowLoading] = useState(true);

  const { id } = useParams();

  const jwt = localStorage.getItem("jwt");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const getHistoric = async () => {
    setShowLoading(true);
    if (jwt) {
      if (id) {
        const response = await historicService.findOne(id);
        setHistoric(response?.data);
        setShowLoading(false);
        const forawing = response?.data.forawing;
        localStorage.setItem("forawing", forawing);
        console.log(response?.data);
      }
    }
  };
  function returnDetails() {
    navigate(`/alunos/detalhes/${historic?.studentId}`);
  }
  useEffect(() => {
    getHistoric();
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
            onClick={() => returnDetails()}
          />
        </S.logins>
      </S.heading>
      {!showLoading ? (
        <S.content>
          <S.organize>
            <S.divHistoricDetails>
              <S.cardDetails>
                <S.uniqueCard>
                  <div>
                    <p>Data Inicial</p>
                    {historic?.startDate}
                  </div>
                  <div>
                    <p>Data de Retorno</p>
                    {historic?.returnDate}
                  </div>
                  <div>
                    <p>Exames a fazer</p>
                   {historic?.angulocob?"tem":""}
                   {historic?.cirurgia?"tem":""}
                   {historic?.colete?"tem":""}
                   {historic?.raiox?"RAIO-X":""}
                   {historic?.fisioterapia?"tem":""}
                  </div>
                  <S.buttonsHistoric>
                    <S.buttonEdit onClick={()=> navigate(`/agendar/${id}`)}>EDITAR</S.buttonEdit>
                    <S.buttonDelete onClick={openModal}>DELETAR</S.buttonDelete>
                  </S.buttonsHistoric>
                </S.uniqueCard>
              </S.cardDetails>
            </S.divHistoricDetails>
            <S.divImages>
              <S.Details>Fotos</S.Details>
              <div>
                <p>Foto 01</p> <p>Foto 02</p>
              </div>
              <div>
                <img src={historic?.firstPhoto} alt="primeira foto da coluna" />
                <img src={historic?.secondPhoto} alt="secunda foto da coluna" />
              </div>
            </S.divImages>
          </S.organize>
          <S.divObs>
            <h5>Observações</h5>
            <p>{historic?.note}</p>
          </S.divObs>
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
              onClick={() => {historicService.deleteHistoric(id ?? ""); navigate(`/alunos/detalhes/${historic?.studentId}`)}}
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

export default DetailsHistoric;
