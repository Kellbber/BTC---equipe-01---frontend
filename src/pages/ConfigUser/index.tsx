import FormUser from '../../components/FormUser';
import * as S from './style';

type Update ={
    update?:boolean;
}
const ConfigUser = (props:Update) => {
  return (
   <S.background>
    <FormUser update={props.update}></FormUser>
   </S.background>
  )
}

export default ConfigUser;