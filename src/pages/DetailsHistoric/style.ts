import styled, { css } from "styled-components";
import icon from "../../assets/images/icon.svg";
import backHistorico from "../../assets/images/back-historico.png";
export const background = styled.section`
  min-height: 100vh;
  min-width: 100%;
  background: url(${backHistorico});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    justify-content: center;

    flex-direction: column;
  `}
`;

export const cardDetails = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  flex-direction: column;
  height: 80px;
  margin-bottom: 1rem;
`;

export const divImages = styled.div`
  ${({ theme }) => css`
    margin-top: 1rem;
    margin-left: 1rem;
    display: flex;
    width: 40%;
    border-radius: 0.2rem;
    align-items: center;

    background-color: ${theme.colors.primaryColors};
    flex-direction: column;
    div {
      width: 100%;
      display: flex;
      justify-content: space-around;
      margin-bottom: 1rem;
    }
    img {
      width: 40%;
    }
    p {
      margin: -1rem;
      font-family: ${theme.constants.headingFontFamily};
      color: gray;
      font-size: 0.8rem;
    }
  `}
`;

export const organize = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
export const Details = styled.h5`
  ${({ theme }) => css`
    display: flex;
    width: 15%;
    border-radius: 0.2rem;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-family: ${theme.constants.textFinalFontFamily};
    font-size: 1.5rem;
    background-color: ${theme.colors.primaryColors};
  `}
`;

export const divHistoricDetails = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 40%;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.primaryColors};
    flex-direction: column;
    margin-top: 1rem;
    margin-left: 1rem;
    border-radius: 0.2rem;
    padding-top: 1rem;
    min-height: 325px;
    button {
      display: flex;
      justify-content: center;
    }
  `}
`;

export const uniqueCard = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.constants.headingFontFamily};
    font-size: 0.8rem;
    display: flex;
    width: 100%;
    font-weight: 500;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    flex-direction: column;
    margin-top: 1rem;
    p {
      color: gray;
    }
    div {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }
    select {
      outline: none;
      font-family: ${theme.constants.headingFontFamily};
      width: 23%;
    }
  `}
`;

export const divObs = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 50%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    flex-direction: column;
    background-color: ${theme.colors.primaryColors};
    justify-content: center;
    align-items: center;
    align-self: center;
    border-radius: 0.2rem;
    h5 {
      font-family: ${theme.constants.headingFontFamily};
      text-align: center;
    }

    p {
      width: 80%;
      outline: none;
      border: transparent;
      border-radius: 0.2rem;
      margin-bottom: 1rem;
      text-align: center;
    }
  `}
`;
export const buttonsHistoric = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
`;


export const buttonEdit = styled.button`
${({theme})=>css`
    background-color: ${theme.colors.secundaryColor};
    width: 20%;
    outline: none;
    cursor: pointer;
    border: transparent;
    list-style: none;
    align-items: center;
    justify-content: center;
    font-family: ${theme.constants.headingFontFamily};
    color: ${theme.colors.primaryColors};
    border-radius: 0.2rem;
    margin-top: 4rem;
`}
`
export const buttonDelete = styled.button`
${({theme})=>css`
    background-color: red;
    width: 20%;
    outline: none;
    cursor: pointer;
    border: transparent;
    list-style: none;
    align-items: center;
    justify-content: center;
    font-family: ${theme.constants.headingFontFamily};
    color: ${theme.colors.primaryColors};
    border-radius: 0.2rem;
    margin-top: 4rem;
`}
`

export const formDelete = styled.form`
${({theme})=>css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    p{
        width: 50%;
        margin: -1rem;
        font-family: ${theme.constants.headingFontFamily};
        font-size: .8rem;
    }
    button{
        width: 20%;
        margin-top: 2rem;
        font-family: ${theme.constants.headingFontFamily};
        background-color: ${theme.colors.backgroundColor};
        border: transparent;
        border-radius: 0.2rem;
        cursor: pointer;
    }
`}
`
