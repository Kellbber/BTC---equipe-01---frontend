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


  flex-direction: column;
`;

export const adminSearch = styled.div<setaType>`
  ${({ theme }) => css`
    display: flex;
    min-width: 30%;
    justify-content: center;
    margin-top: 0.7rem;
    padding: 1rem 3rem;
    border-radius: 0.2rem;
    background-color: ${theme.colors.primaryColors};
    flex-wrap: wrap;

    input {
      display: flex;
      outline: none;
      font-family: ${theme.constants.textInitialFontFamily};
      width: 90%;
      padding: 0.5rem 0.2rem;
      border: 1px solid ${theme.colors.backgroundColor};
      margin-right: 2rem;
    }
    option {
      list-style: none;
      outline: none;
      border: 1px solid black;
      border-radius: 0.2rem;
      font-family: ${theme.constants.textInitialFontFamily};
    }
    select {
      font-family: ${theme.constants.textInitialFontFamily};
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
    background: url(${(props) => (props.icons ? seta2 : seta)});
    background-repeat: no-repeat;
    background-size: 1rem;
    background-position: 90%;
    outline: none;
    border: 1px solid #d9d9d9;
    width: 100%;
    padding: 0 1.5rem 0 1.5rem;
  }
`;

export const searchList = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding-bottom: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const itemList = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 80%;
    background-color: ${theme.colors.primaryColors};

    flex-direction: column;
  `}
`;
export const divTable = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 0.2rem 0 0.2rem 0;
    div {
      width: 100%;
      display: flex;
      justify-content: space-around;

      font-family: ${theme.constants.textInitialFontFamily};
      font-size: 0.8rem;
      transition: ease-in-out 0.5s;
    }
    div.divmain {
      border-bottom: 1px solid ${theme.colors.backgroundColor};
    
    }
    div.divmain:hover {
      background-color: ${theme.colors.shadowColorHover};
      cursor: pointer;
      border-bottom: 1px solid ${theme.colors.backgroundColor};
    }
  `}
`;
export const nameTable = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secundaryColor};
    background-size: cover;
    font-family: ${theme.constants.headingFontFamily};
    font-size: 0.8rem;
    font-weight: 500;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    p {
      color: ${theme.colors.primaryColors};
    }
  `}
`;
export const divisionLine = styled.div`
  display: flex;
  width: 100%;
  background-color: black;
`;

export const addButton = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: ${theme.colors.secundaryColor};

    outline: none;
    list-style: none;
    border: transparent;
    border-radius: 0.2rem;
    margin-top: 1rem;
    cursor: pointer;
    transition: ease-in-out 0.5s;
    p {
      color: ${theme.colors.primaryColors};
      font-family: ${theme.constants.headingFontFamily};
      font-weight: 600;
      font-size: 100%;
      width: 100%;
    }
    p:hover {
      transform: scale(1.1);
    }

  `}
`;
export const divButtonAdd = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    width: 20%;
  }
  @media only screen and (max-width: 400px) {
    width: 30%;
  }
`;

export const buttonBack = styled.button`
${({theme})=>css`
  border: transparent;
  outline: none;
  background-color: transparent;
  color: ${theme.colors.secundaryColor};
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`}
`