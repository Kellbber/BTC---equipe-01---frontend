import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
const LoggedUser = () => {
  const navigate = useNavigate();
  return (
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
          onClick={() => navigate("/admin")}
        />
      </S.logins>
    </S.heading>
  );
};

export default LoggedUser;
