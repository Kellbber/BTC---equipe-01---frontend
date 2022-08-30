import styled, { css } from "styled-components";
import background from "../../assets/images/background-Register.png";
import icon from "../../assets/images/icon.svg";

export const createcss = styled.section`
  ${({ theme }) => css`
    background-image: url(${background});
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    min-width: 100vw;
    .containerregister {
      width: 100%;
      margin-top: 3rem;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;

export const heading = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100%;
    background-color: ${theme.colors.secundaryColor};
    align-items: center;
    .BiArrowBack {
    padding: 0.5rem;
    grid-column: 4/4;
    display: flex;
    color: ${theme.colors.primaryColors};
    font-family: ${theme.constants.headingFontFamily};
    justify-content: flex-end;
    p {
      cursor: pointer;
      transition: ease-in-out 0.5s;
    }
    p:hover {
      transform: scale(1.1);
    }
  `}
`;

export const registerSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    height: 300px;
    width: 30%;
    border-radius: 5px;
    background: ${theme.colors.primaryColors};
  `}
`;

export const div = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;


  ${({ theme }) => css`
    input {
      display: flex;
      outline: none;
      font-family: ${theme.constants.textInitialFontFamily};
      width: 50%;
      padding: 0.5rem 0.9rem;
      border: 1px solid ${theme.colors.backgroundColor};
      margin-right: 2rem;
    }
    button {
      border: transparent;
      width: 8rem;
      height: 2.8rem;
      background-color: ${theme.colors.secundaryColor};
      font-family: ${theme.constants.headingFontFamily};
      font-weight: 600;
      color: ${theme.colors.primaryColors};
      margin-left: 3rem;
      border-radius: 0.2rem;
      cursor: pointer;
    }
    p:hover {
      text-align: center;
      transform: scale(1.1);
      cursor: pointer;
    }
  `}
`;

export const registerborder = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 4.7rem;
    background: #2ea8dc;
    border-radius: 5px 5px 0px 0px;
  `}
`;
export const p = styled.p`
  ${({ theme }) => css`
    text-align: center;
    font-family: ${theme.constants.headingFontFamily};
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 30px;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.primaryColors};
  `}
`;
export const iconConfig = styled.div`
  ${({ theme }) => css`
    width: 120%;
    grid-column: 2/2;
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

export const formUser = styled.form`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 50vh;
    input {
      margin: 1rem 0 1rem 0;
      width: 50%;
    }
    button{
      margin-left: -1rem;
      margin-bottom: -1rem;
      margin-right: -1rem;
      display: flex;
      align-self: center;
      justify-content: center;
      width: 30%;
    }
  `}
`;
