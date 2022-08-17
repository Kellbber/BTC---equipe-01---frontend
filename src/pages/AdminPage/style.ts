import styled, { css } from "styled-components";
import icon from "../../assets/images/icon.svg";
import backgroundAdm from "../../assets/images/background-admin.png";
import theme from "../../assets/styles/theme";
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

export const title = styled.h1`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    font-family: ${theme.constants.headingFontFamily};
    font-weight: 700;
    font-size: 3rem;
    text-align: center;
    justify-content: center;
    align-self: center;
    color: ${theme.colors.primaryColors};
    margin-top: -0.1rem;
  `}
`;
export const nameUser = styled.p`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    justify-content: center;
    font-family: ${theme.constants.textFinalFontFamily};
    color: ${theme.colors.primaryColors};
    font-weight: 800;
    font-size: 3.5rem;
    margin-top: -2rem;
  `}
`;

export const options = styled.p`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-family: ${theme.constants.textFinalFontFamily};
    color: ${theme.colors.primaryColors};
    text-align: center;
    font-weight: 600;
    font-size: 1.5rem;
  `}
`;

export const cardOptions = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const cardOptionsUnique = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 300px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${theme.colors.primaryColors};
    padding: .5rem;
    margin-bottom: 1rem;
    p{
      width: 100%;
      background-color: ${theme.colors.secundaryColor};
      font-family: ${theme.constants.headingFontFamily};
      font-size: 1rem;
      color: ${theme.colors.primaryColors};
      font-weight: 500;
      margin-top: -1rem;
      text-align: center;
    }
    div{
      display: flex;
      width: 70%;
      font-family: ${theme.constants.headingFontFamily};
      font-size: .8rem;
      text-align: center;
      flex-direction: column;
      align-items: center;
      a{
      margin: .5rem 0 .5rem 0;
      cursor: pointer;
      transition: ease .5s;
    }
    a:hover{
      font-weight: 600;
    }
    }

  `}
`;

export const divSeparator = styled.div`
${({theme})=>css`
    display: flex;
    width: 50%;
    background-color: ${theme.colors.backgroundColor};
    padding: .1rem 0 0 0;
    justify-content: center;
    align-items: center;


`}
`