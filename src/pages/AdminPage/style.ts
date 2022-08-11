import styled, { css } from "styled-components";
import icon from "../../assets/images/icon.svg";
import  backgroundAdm  from "../../assets/images/background-admin.png"
export const background = styled.section`
  ${({ theme }) => css`
    min-height: 100vh;
    min-width: 100vw;
    background-image: url(${backgroundAdm});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
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

export const settingsAdmin = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 20%;
    justify-content: flex-start;
    align-self: flex-start;
    background-color: ${theme.colors.primaryColors};
    flex-direction: column;
    border-right: 0.5px solid ${theme.colors.footerSecundaryColor};
    border-bottom: 0.5px solid ${theme.colors.footerSecundaryColor};
    border-radius: 0 0 1rem;
    text-align: center;
    p {
      display: flex;
      width: 100%;
      justify-content: center;
      font-family: ${theme.constants.textFinalFontFamily};
      font-weight: 600;
      font-size: 0.8rem;
      color: #2EA8DC;
    }
  `}
`;
export const btnNavigate = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    button {
      display: flex;
      outline: none;
      list-style: none;
      background-color: transparent;
      width: 80%;
      border: transparent;

      font-family: ${theme.constants.headingFontFamily};
      font-weight: 400;
      cursor: pointer;
      transition: ease .3s;
    }

    button:hover{
        transform: scale(1.01);
    }
  `}
`;
export const divisionDiv = styled.div`
  ${({ theme }) => css`
    width: 90%;
    border-bottom: 1px solid ${theme.colors.secundaryColor};
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    align-items: center;
    justify-content: center;
    align-self: center;
  `}
`;
