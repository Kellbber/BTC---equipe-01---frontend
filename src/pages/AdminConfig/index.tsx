import * as S from './style'
import {BiLogOut} from 'react-icons/bi'

const AdminConfig = () => {


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
        <BiLogOut cursor="pointer" size={30}/>
        </S.logins>
        </S.heading>
        <S.content>
            <S.adminSearch>
                <input type="text" placeholder='Digite aqui...'/>
                <select name="entity" id="entity" >
                <option>Instituição</option>
                <option>Usuário</option>
                <option>Aluno</option>
                </select>
                <button>Buscar</button>
            </S.adminSearch>
        </S.content>
    </S.background>
  )
}

export default AdminConfig;