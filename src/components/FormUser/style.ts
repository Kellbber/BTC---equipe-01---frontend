import styled, { css } from "styled-components";
import icon from "../../assets/images/icon.svg";

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

export const formContent = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const formDiv = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 30%;
    justify-content: center;
    align-items: center;
    background-color: white;
    align-self: center;
    flex-direction: column;
    border-radius: 0.2rem;
    p {
      width: 100%;
      background-color: ${theme.colors.secundaryColor};
      font-family: ${theme.constants.headingFontFamily};
      font-size: 1rem;
      margin-top: -1rem;
      text-align: center;
      color: white;
      padding: 0.8rem 0;
      border-radius: 0.2rem;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 1rem;
      width: 70%;
    }
    input {
      width: 100%;
      outline: none;
      outline: none;
      margin-bottom: 0.5rem;
      padding: 0.5rem;
      border: 1px solid ${theme.colors.backgroundColor};
    }

    select{
      display: flex;
      width: 108%;
      padding: .5rem 0 .5rem 0;
      outline: none;
      border: 1px solid ${theme.colors.backgroundColor};
      margin-bottom: 1rem;
    }
  `}
`;
