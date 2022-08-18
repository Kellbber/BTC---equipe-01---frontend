import { useParams } from "react-router-dom";
import * as S from './style'
import FormInstitution from '../../components/FormInstitution'
type Update = {
  update?:boolean
}

const ConfigInstitution = (props: Update) => {

  const {id} = useParams();
  return (
  <S.background>
<FormInstitution update={props.update}></FormInstitution>
  </S.background>
  )
}

export default ConfigInstitution;