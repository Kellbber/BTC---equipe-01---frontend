import { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import Modal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { historicService } from "../../services/historicService";
import * as S from "./style";
import pdFmake from "pdfmake/build/pdfmake";
import pdFfonts from "pdfMake/build/vfs_fonts";

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
  raiox: boolean;
  fisioterapia: boolean;
  colete: boolean;
  cirurgia: boolean;
  angulocob: boolean;
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

  const generatePdf = (historic: Historic) => {
    const title = [
      {
        text: "Historico",
        fontSize: 15,
        bold: true,
        margin: [15, 20, 0, 45],
      },
    ];

    const details = [
      {
        table: {
          headerRows: 1,
          body: [
            [
              { text: "Data Inicial", style: "tableHeader" },
              { text: "Data de Retorno", style: "tableHeader" },
              { text: "Exames ou procedimentos ", style: "tableHeader" },
            ],
            [
              { text: historic.startDate },
              { text: historic.returnDate },
              historic.angulocob ? { text: "angulocob" } : "",
            ],
            [{}, {}, historic.cirurgia ? { text: "cirurgia" } : ""],
            [{}, {}, historic.colete ? { text: "colete" } : ""],
            [{}, {}, historic.raiox ? { text: "raiox " } : ""],
            [{}, {}, historic.fisioterapia ? { text: "fisioterapia " } : ""],
          ],
        },
        layout: "headerLineOnly",
      },
    ];

    function Rodape(currentPage: any, pageCount: any) {
      return [
        {
          text: currentPage + " / " + pageCount,
          alignment: "right",
          fontSize: 9,
          margin: [0, 10, 20, 0],
        },
      ];
    }

    const docdefinitions: any = {
      pageSize: "A4",
      pageMargins: [15, 50, 15, 40],

      header: [title],
      content: [details],
      footer: Rodape,
    };

    pdFmake.createPdf(docdefinitions).download();
  };

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
                    <p>Exames ou procedimentos</p>
                    {historic?.angulocob ? "Ângulo cob" : ""}
                    <br />
                    {historic?.cirurgia ? "Cirurgia" : ""}
                    <br />
                    {historic?.colete ? "Colete" : ""}
                    <br />
                    {historic?.raiox ? "Raio-X" : ""}
                    <br />
                    {historic?.fisioterapia ? "Fisioterapia" : ""}
                    <br />
                  </div>
                  <S.buttonsHistoric>
                    <S.buttonEdit onClick={() => navigate(`/agendar/${id}`)}>
                      EDITAR
                    </S.buttonEdit>
                    {historic && (
                      <S.buttonDownload
                        onClick={() => {
                          generatePdf(historic);
                        }}
                      >
                        Baixar consulta
                      </S.buttonDownload>
                    )}

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
              onClick={() => {
                historicService.deleteHistoric(id ?? "");
                navigate(`/alunos/detalhes/${historic?.studentId}`);
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

export default DetailsHistoric;
