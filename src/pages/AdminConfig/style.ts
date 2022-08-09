import styled, { css } from "styled-components";
import icon from "../../assets/images/icon.svg";
import seta from "../../assets/images/seta.svg";
import seta2 from '../../assets/images/seta2.svg'

type seta ={

}
export const background = styled.section`
  ${({ theme }) => css`
    min-height: 100vh;
    min-width: 100vw;
    background: ${theme.colors.backgroundColor};
  `}
`;

export const heading = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;

    background-color: ${theme.colors.secundaryColor};
    align-items: center;
    justify-content: center;
  `}
`;
export const iconConfig = styled.div`
  ${({ theme }) => css`
    width: 65%;

    p {
      text-align: center;
      color: ${theme.colors.primaryColors};
      display: flex;
      align-self: center;
      justify-content: flex-end;
      font-family: ${theme.constants.headingFontFamily};
      font-weight: 600;
    }
    img {
      background-image: url(${icon});
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      width: 20px;
      padding: 0.8rem 0.2rem 0.8rem 0.2rem;
      align-self: center;
    }
  `}
`;
export const logins = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 50%;
    justify-content: flex-end;
    margin-right: 2rem;
    color: ${theme.colors.primaryColors};
    font-family: ${theme.constants.headingFontFamily};
    font-weight: 600;
    p {
      cursor: pointer;
      margin: 0 0.2rem 0 0.2rem;
      transition: ease-in-out 0.5s;
    }

    p:hover {
      transform: scale(1.1);
    }
  `}
`;
export const content = styled.main`
  display: flex;
  min-width: 100%;
  align-items: center;
  justify-content: flex-start;

  height: 100vh;
  flex-direction: column;
`;

export const adminSearch = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 50%;
    justify-content: space-around;
    margin-top: 0.7rem;
    padding: 1rem 3rem;
    border-radius: 0.2rem;

    background-color: ${theme.colors.primaryColors};
    input {
      display: flex;
      outline: none;
      border: 1px solid ${theme.colors.backgroundColor};
      padding: 0.8rem;
      font-family: ${theme.constants.textFinalFontFamily};
    }
    select {
    
      display: flex;
      outline: none;
      border: 1px solid ${theme.colors.backgroundColor};
      padding: 0%.5rem;
      background: url(${seta});
      background-repeat: no-repeat;
      background-size: 1rem;
      background-position-x:6rem;
      background-position-y:.8rem;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      width: 25%;
      font-family: ${theme.constants.textFinalFontFamily};
    }
    option{
        list-style: none;
        outline: none;
        border: 1px solid black;
        border-radius: 0.2rem;
    }
    button {
      list-style: none;
      outline: none;
      background-color: ${theme.colors.secundaryColor};
      border: transparent;
      border-radius: 0.2rem;
      width: 15%;
      color: ${theme.colors.primaryColors};
      font-family: ${theme.constants.headingFontFamily};
      font-weight: 400;
    }
  `}
`;
