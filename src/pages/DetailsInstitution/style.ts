import styled, { css } from "styled-components";
import fundoInst from "../../assets/images/back-institution.png";
import icon from "../../assets/images/icon.svg";
export const background = styled.section`
  ${({ theme }) => css`
    min-height: 100vh;
    background: url(${fundoInst});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
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
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    justify-content: ;
    align-items: center;
    flex-direction: column;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    font-family: ${theme.constants.nameInstitutionFamily};

    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: -0.2rem;
  `}
`;

export const styleCep = styled.a`
  ${({ theme }) => css`
    margin-top: 1rem;
    display: flex;
    width: 20%;
    list-style: none;
    outline: none;
    border: transparent;
    background-color: ${theme.colors.secundaryColor};
    border-radius: 0.2rem;
    font-family: ${theme.constants.headingFontFamily};
    color: ${theme.colors.primaryColors};
    font-weight: 500;
    padding: 0.5rem 0 0.5rem 0;
    border: 1px solid ${theme.colors.backgroundColor};
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
    transition: ease-in-out 0.2s;
    :hover {
      font-weight: 600;
    }
  `}
`;
export const cardDetails = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 90%;
    justify-content: center;
    flex-direction: column;
    height: 80px;
    margin-bottom: 1rem;
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
  `}
`;
export const uniqueCardHistoric = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.constants.headingFontFamily};
    font-size: 0.8rem;
    display: flex;
    width: 100%;
    font-weight: 500;
    display: flex;
    align-items: center;
    margin-bottom: 0.3rem;
    justify-content: space-between;
    p {
      color: gray;
      margin: 0;
    }
  `}
`;
export const uniqueCardConsult = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.constants.headingFontFamily};
    font-size: 0.8rem;
    display: flex;
    min-width: 100%;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-around;

    div {
      min-width: 15%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
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
export const DetailsCard = styled.h5`
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
export const titleInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 90%;
    justify-content: space-around;
    align-items: center;
    background-color: ${theme.colors.secundaryColor};
    font-family: ${theme.constants.headingFontFamily};
    color: ${theme.colors.primaryColors};
    font-size: 0.8rem;
    p {
      min-width: 8%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;
export const cardDetailsConsult = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 90%;
    align-items: flex-start;
    justify-content: flex-start;
    margin-bottom: 1rem;
    background-color: ${theme.colors.backgroundColor};
    flex-direction: column;
  `}
`;
export const divisionLine = styled.div`
  display: flex;
  width: 100%;
  background-color: black;
`;

export const buttonEdit = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${theme.colors.secundaryColor};
    cursor: pointer;
    border: transparent;
    border-radius: 0.2rem;
    font-family: ${theme.constants.headingFontFamily};
    align-self: center;
    margin-top: 5rem;
    margin-bottom: 1rem;

    width: 20%;
    color: ${theme.colors.primaryColors};
  `}
`;

export const divButtons = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: flex-end;
  margin-top: 5rem;
  margin-bottom: -1rem;
`;

//historico
export const addHistoric = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${theme.colors.secundaryColor};
    cursor: pointer;
    border: transparent;
    border-radius: 0.2rem;
    font-family: ${theme.constants.headingFontFamily};
    align-self: center;
    margin-top: 1rem;
    margin-bottom: 1rem;

    width: 30%;
    color: ${theme.colors.primaryColors};
  `}
`;

export const division = styled.div`
  display: flex;
  width: 100%;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: gray;
  padding: 0.1% 0 0.1% 0;
`;

export const divStudentDetails = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 40%;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.primaryColors};
    flex-direction: column;
    height: 60vh;
    border-radius: 0.2rem;
    padding-top: 1rem;

    button {
      display: flex;
      justify-content: center;
    }
  `}
`;
export const divStudentHistoric = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 40%;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.primaryColors};
    flex-direction: column;
    margin-left: 1rem;
    max-height: 31rem;
    overflow-y: auto;
    width: 35rem;
    height: 35rem;
    border-radius: 0.2rem;
    border: transparent;
  `}
`;

export const organize = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;
export const buttonsHistoric = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
`;

export const buttonDelete = styled.button`
  ${({ theme }) => css`
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
`;
export const formDelete = styled.form`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    p {
      width: 50%;
      margin: -1rem;
      font-family: ${theme.constants.headingFontFamily};
      font-size: 0.8rem;
    }
    button {
      width: 20%;
      margin-top: 2rem;
      font-family: ${theme.constants.headingFontFamily};
      background-color: ${theme.colors.backgroundColor};
      border: transparent;
      border-radius: 0.2rem;
      cursor: pointer;
    }
  `}
`;