import FormInstitution from '../../components/FormInstitution'
import * as S from './style'

type Update = {
  update?:boolean
}

const ConfigInstitution = (props: Update) => {
  return (
  <S.background>
<FormInstitution update={props.update}></FormInstitution>
  </S.background>
  )
}

export default ConfigInstitution;