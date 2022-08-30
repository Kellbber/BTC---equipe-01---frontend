import FormHistoric from '../../components/FormHistoric'
import React from 'react'
import * as S from './style'

type Update = {
    update?:boolean
  }

  
const ConfigHistoric = (props: Update) => {
  return (
    <S.background>
        <FormHistoric update={props.update}/>
    </S.background>
  )
}

export default ConfigHistoric;