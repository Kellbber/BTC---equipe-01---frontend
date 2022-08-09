import styled, { css } from "styled-components";
import background from "../../assets/images/background-inicial.png";

import icon from "../../assets/images/icon.svg";

export const Initial = styled.section`
  ${({ theme }) => css`
    background-image: url(${background});
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    min-width: 100vw;

    font-family: ${theme.constants.fontFamily};
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
  justify-content: center;

  height: 100vh;
  flex-direction: column;
`;

export const text1 = styled.p`
  ${({ theme }) => css`
    display: flex;

    color: ${theme.colors.primaryColors};
    font-family: ${theme.constants.textInitialFontFamily};
    font-size: 200%;
    margin: 0;
    font-weight: 600;
    margin-bottom: -3rem;
  `}
`;

export const text2 = styled.p`
  ${({ theme }) => css`
    display: flex;

    font-size: 330%;
    color: ${theme.colors.primaryColors};
    font-family: ${theme.constants.textInitialFontFamily};
    font-weight: 800;
  `}
`;

export const text3 = styled.p`
  ${({ theme }) => css`
    margin: 0;
    width: 50%;
    display: flex;

    margin-top: -2rem;
    text-align: center;
    color: ${theme.colors.primaryColors};
    font-family: ${theme.constants.textFinalFontFamily};
    font-weight: 400;
  `}
`;

export const primaryFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;

    background: ${theme.colors.footerPrimaryColor};
    align-items: center;
    justify-content: space-evenly;
  `}
`;

export const secundaryFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;

    background: ${theme.colors.footerSecundaryColor};

    p {
      width: 100%;
      color: ${theme.colors.primaryColors};
      font-family: ${theme.constants.headingFontFamily};
      font-size: 0.7rem;
      font-weight: 400;
      text-align: center;
    }
  `}
`;
export const divFooter = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 25%;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;

    h5 {
      color: ${theme.colors.primaryColors};
      font-family: ${theme.constants.textInitialFontFamily};
      font-weight: 800;
      font-size: 1rem;
    }
    p {
      color: ${theme.colors.primaryColors};
      font-family: ${theme.constants.textInitialFontFamily};
      font-weight: 500;
      font-size: 0.8rem;
      margin-top: -2rem;
      transition: ease 0.5s;
    }
    p:hover {
      transform: scale(1.1);
      cursor: pointer;
    }
  `}
`;
