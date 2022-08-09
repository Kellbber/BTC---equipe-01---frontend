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
    width: 100%;
    align-items: center;
    justify-content: center;
    p {
      text-align: center;
      color: ${theme.colors.primaryColors};
      display: flex;
      align-self: center;
      justify-content: center;
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
