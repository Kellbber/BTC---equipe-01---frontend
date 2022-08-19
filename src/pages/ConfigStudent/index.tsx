import React from 'react'
import FormStudent from '../../components/FormStudent';
import * as S from './style'
type Update ={
    update?:boolean
}
const ConfigStudent = (props: Update) => {
  return (
    <S.background>
        <FormStudent update={props.update}></FormStudent>
    </S.background>
  )
}

export default ConfigStudent;