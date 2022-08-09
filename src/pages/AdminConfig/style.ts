import styled, { css } from "styled-components";
import icon from "../../assets/images/icon.svg";
import seta from "../../assets/images/seta.svg";
import seta2 from "../../assets/images/seta2.svg";

type setaType = {
  icons?: boolean;
};
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

export const adminSearch = styled.div<setaType>`
  ${({ theme }) => css`
    display: flex;
    width: 60%;
    justify-content: space-evenly;
    margin-top: 0.7rem;
    padding: 1rem 3rem;
    border-radius: 0.2rem;
    background-color: ${theme.colors.primaryColors};

    input {
      display: flex;
      outline: none;
      font-family: ${theme.constants.textInitialFontFamily};
      padding: 0.8rem;
    }
    option {
      list-style: none;
      outline: none;
      border: 1px solid black;
      border-radius: 0.2rem;
      font-family: ${theme.constants.textInitialFontFamily};
    }
    button {
      list-style: none;
      outline: none;
      border: transparent;
      border-radius: 0.2rem;
      width: 60%;
      background-color: ${theme.colors.secundaryColor};
      font-family: ${theme.constants.headingFontFamily};
      font-weight: 600;
      color: ${theme.colors.primaryColors};
      margin-left: 2rem;
    }
  `}
`;

export const selectEntity = styled.div<setaType>`
  width: 30%;
  display: flex;
  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: url(${(props) => (props.icons? seta2 : seta)});
    background-repeat: no-repeat;
    background-size: 1rem;
    background-position-x: 6rem;
    background-position-y: 0.8rem;
    outline: none;
    border: 1px solid #D9D9D9;
    width: 100%;

  }
`;
