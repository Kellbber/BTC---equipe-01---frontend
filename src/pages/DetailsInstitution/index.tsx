import * as S from './style'
import { useNavigate, useParams } from 'react-router-dom';
import { institutionService } from '../../services/institutionService';
import { useEffect, useState } from 'react';
import { Institution } from '../../types/Institution';
import { BiArrowBack } from 'react-icons/bi';

const DetailsInstitution= () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [institution, setInstitution] = useState<Institution>();

    const getOneInstitution = async ()=>{
        if(id){
            const get = await institutionService.oneInstitution(id);
            setInstitution(get?.data);
        }
    }
    console.log(institution)
useEffect(()=>{
    getOneInstitution()
},[])
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
            onClick={() => navigate("/instituicoes")}
          />
        </S.logins>
      </S.heading>
    {institution?.name}
    {institution?.cep}
    {institution?.city}
    {institution?.complement}
    {institution?.district}
    {institution?.phone}
    {institution?.state}
    {institution?.street}
</S.background>
  )
}

export default DetailsInstitution;