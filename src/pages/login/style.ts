import styled, { css } from "styled-components";
import background from "../../assets/images/background-login.png";
import icon from "../../assets/images/icon.svg";

export const logincss = styled.section`
  ${({ theme }) => css`
    background-image: url(${background});
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    min-width: 100vw;
    .containerlogin {
      width: 100%;
      min-height: calc(100vh - 5rem);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;

export const heading = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: ${theme.colors.secundaryColor};
    align-items: center;
    justify-content: space-between;
.BiArrowBack {
    color: ${theme.colors.primaryColors};
    font-family: ${theme.constants.headingFontFamily};
    margin-right: .5rem;
    p {
      cursor: pointer;
      
      transition: ease-in-out 0.5s;
      
    }

    p:hover {
      transform: scale(1.1);
    }
  `}
`;

export const LoginSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    width: 30rem;
    height: 20rem;
    border-radius: 5px;
    background: ${theme.colors.primaryColors};
  `}
`;

export const div = styled.div`
  ${({ theme }) => css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 4rem;
    input {
      display: flex;
      outline: none;
      font-family: ${theme.constants.textInitialFontFamily};
      width: 100%;
      padding: 0.3rem 0.9rem;
      border: 1px solid ${theme.colors.backgroundColor};
      margin-right: 2rem;
    }
    button {
      border: transparent;
      width: 6rem;
      height: 2.8rem;
      background-color: ${theme.colors.secundaryColor};
      font-family: ${theme.constants.headingFontFamily};
      font-weight: 600;
      color: ${theme.colors.primaryColors};
      margin-left: 4rem;
      border-radius: 0.2rem;
      cursor: pointer;
    }
    p:hover {
      text-align: center;
      transform: scale(1.1);
      cursor: pointer;
    }

  a{
    font-family: ${theme.constants.headingFontFamily};
    font-size: .8rem;
    text-align: center;
    font-weight: 500;
    cursor: pointer;
  }
  `}
`;

export const loginborder = styled.section`
  ${({ theme }) => css`
    width: 30rem;
    height: 4.7rem;
    background: #2ea8dc;
    border-radius: 5px 5px 0px 0px;
  `}
`;
export const p = styled.p`
  ${({ theme }) => css`
    text-align: center;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 30px;
    justify-content: center;
    color: ${theme.colors.primaryColors};
  `}
`;
export const iconConfig = styled.div`
  ${({ theme }) => css`
    width: 100%;
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
