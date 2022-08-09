import * as S from "./style";
import { BiLogOut } from "react-icons/bi";
import { useEffect, useState } from "react";

const AdminConfig = () => {
  
  const [icon, setIcon] = useState<boolean>(false);

  function changeIcon() {
    if (icon) {
      setIcon(false);
    } else {
      setIcon(true);
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
          <BiLogOut cursor="pointer" size={30} />
        </S.logins>
      </S.heading>
      <S.content>
        <S.adminSearch>
          <input type="text" placeholder="Digite aqui..." />
          <S.selectEntity icons={icon}>
            <select name="entity" id="entity" onClick={changeIcon}>
              <option>Instituição</option>
              <option>Usuário</option>
              <option>Aluno</option>
            </select>
            <button>Buscar</button>
          </S.selectEntity>
        </S.adminSearch>
      </S.content>
    </S.background>
  );
};

export default AdminConfig;
