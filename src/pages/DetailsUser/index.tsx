import { useEffect, useState } from "react";
import Modal from "react-modal";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { User } from "types/User";
import Loading from "../../components/Loading";
import { userLoggedService } from "../../services/authService";
import { userApiService } from "../../services/userService";
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
Modal.setAppElement("#root");

const DetailsUser = () => {
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(true);
  const [user, setUser] = useState<User>();
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  interface UserLogged {
    id: string;
    email: string;
    password: string;
    confirmPassword: string;
    role: string;
  }
  const [userLogged, setUserLogged] = useState<UserLogged>({
    id: "",
    password: "",
    confirmPassword: "",
    email: "",
    role: "",
  });
  const { id } = useParams();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const getOneUser = async () => {
    if (jwt) {
      if (id) {
        const get = await userApiService.oneUser(id);
        setUser(get?.data);
      }
    }
    setShowLoading(false);
  };
  const getUserLogged = async () => {
    const response = await userLoggedService.userLogged();
    setUserLogged(response?.data);
  };
  useEffect(() => {
    getOneUser();
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
      {!showLoading?
      <S.content>
        <S.divMain>
          <S.Title>{user?.name}</S.Title>
          {userLogged.role === "ADMIN" ? (
            <S.divButtons>
              <S.buttonEdit onClick={() => navigate(`/formusuario/${id}`)}>
                Editar
              </S.buttonEdit>
              <S.buttonDelete onClick={openModal}>DELETAR</S.buttonDelete>
            </S.divButtons>
          ) : (
            ""
          )}
          <S.Details>Detalhes</S.Details>
          <S.titleInfo>
            <p>Nome</p>
            <p>Email</p>
            <p>Cargo</p>
          </S.titleInfo>
          <S.cardDetails>
            <S.uniqueCard>{user?.name}</S.uniqueCard>
            <S.uniqueCard>{user?.email}</S.uniqueCard>
            <S.uniqueCard>{user?.role}</S.uniqueCard>
          </S.cardDetails>
        </S.divMain>
      </S.content>
      :""}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <S.formDelete>
          <p>Deseja realmente deletar?</p>
          <S.buttonsHistoric>
            <button
              onClick={() => {userApiService.DeleteUser(id ?? ""); navigate(`/usuarios`)}}
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

export default DetailsUser;
