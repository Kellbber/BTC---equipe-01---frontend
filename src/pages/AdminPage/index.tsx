import { useNavigate } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';
import {GiSchoolBag} from 'react-icons/gi'
import {FaSchool} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import * as S from './style'

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
      <S.settingsAdmin>
        <p>CONFIGURAÇÕES</p>
        <S.divisionDiv/>
        <S.btnNavigate>
            <button onClick={()=>navigate('/instituicoes')}>Instituições</button>
            <FaSchool size={20} color="#44494b"/>
        </S.btnNavigate>
        <S.divisionDiv/>
        <div/>
        <S.btnNavigate>
            <button onClick={()=>navigate('/alunos')}>Alunos</button>
            <GiSchoolBag size={20} color="#44494b" />
        </S.btnNavigate>
        <S.divisionDiv/>
        <S.btnNavigate>
            <button onClick={()=>navigate('/usuarios')}>Usuários</button>
            <FiUsers size={20} color="#44494b" />
        </S.btnNavigate>
        <S.divisionDiv/>
      </S.settingsAdmin>
    </S.background>
  )
}

export default AdminPage;