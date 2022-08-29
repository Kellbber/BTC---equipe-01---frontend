import { ButtonHTMLAttributes } from "react";
import * as S from './style';
type ButtonType = ButtonHTMLAttributes<HTMLButtonElement>;

const SendButton= ({...ButtonType}: ButtonType) => {
  return (
    <S.SendButton{...ButtonType}>

        Enviar
    </S.SendButton>
  )
}

export default SendButton;