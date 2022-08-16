import { BiLogOut } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const AdminPage = () => {

    const navigate = useNavigate();

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
          <BiLogOut cursor="pointer" size={30} onClick={()=>navigate('/')}/>
        </S.logins>
      </S.heading>
    <S.title>
      Bem-vindo(a),
    </S.title>
    <S.nameUser>
      Nome do Usuário!
    </S.nameUser>
    <S.options>
      O que gostaria de fazer?
    </S.options>
    <S.cardOptions>
      <S.cardOptionsUnique>
        <p>Instituições</p>
        <div>
          <a onClick={()=>navigate("/instituicoes")}>Ver todos</a>
          <S.divSeparator/>
          <a onClick={()=>navigate("/forminstituicao")}>Adicionar</a>
        </div>
      </S.cardOptionsUnique>
      <S.cardOptionsUnique>
      <p>Alunos</p>
      <div>
          <a onClick={()=>navigate("/alunos")}>Ver todos</a>
          <S.divSeparator/>
          <a>Adicionar</a>
        </div>
        </S.cardOptionsUnique>
        <S.cardOptionsUnique>
        <p>Usuários</p>
        <div>
          <a onClick={()=>navigate("/usuarios")}>Ver todos</a>
          <S.divSeparator/>
          <a onClick={()=>navigate("/formusuario")}>Adicionar</a>
        </div>
        </S.cardOptionsUnique>
    </S.cardOptions>
    </S.background>
  )
}

export default AdminPage;