import styled, { css } from "styled-components";
import icon from "../../assets/images/icon.svg";
import backgroundname from "../../assets/images/background-name-inst.png"
export const background = styled.section`
  ${({ theme }) => css`
    min-height: 100vh;
    min-width: 100%;
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
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    align-self: center;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    font-family: ${theme.constants.nameInstitutionFamily};
    color: ${theme.colors.primaryColors};
    font-size: 400%;
    font-weight: 900;
    background-image: url(${backgroundname});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 2rem 0 2rem 0;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: -.2rem;
  `}
`;
export const divMain = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 80%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: ${theme.colors.primaryColors};
    margin-top: 1rem;
    border-radius: 0.2rem;
  `}
`;
export const styleCep = styled.a`
${({theme})=>css`
margin-top: 1rem;
display: flex;
width: 10%;
list-style: none;
outline: none;
border: transparent;
background-color: ${theme.colors.secundaryColor};
border-radius: 0.2rem;
font-family: ${theme.constants.headingFontFamily};
color: ${theme.colors.primaryColors};
font-weight: 500;
padding: .5rem 0 .5rem 0;
border: 1px solid ${theme.colors.backgroundColor};
align-items: center;
justify-content: center;
text-decoration: none;
cursor: pointer;
transition: ease-in-out .2s;
:hover{
    font-weight: 600;
}
`}
`
export const cardDetails = styled.div`
${({theme})=>css`
display: flex;
width: 90%;
align-items: center;
justify-content: space-around;
height: 80px;
margin-bottom: 1rem;
background-color: ${theme.colors.backgroundColor};

`}
`
export const uniqueCard = styled.div`
${({theme})=>css`
font-family: ${theme.constants.headingFontFamily};
font-size: .8rem;
display: flex;
min-width: 15%;
font-weight: 500;
display: flex;
align-items: center;
justify-content: center;


`}
`
export const uniqueCardStudent = styled.div`
${({theme})=>css`
font-family: ${theme.constants.headingFontFamily};
font-size: .8rem;
display: flex;
min-width: 100%;
font-weight: 500;
display: flex;
align-items: center;
justify-content: space-around;


div{
    min-width: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
}

`}
`

export const Details = styled.h5`
${({theme})=>css`

display: flex;
width: 100%;
text-align: center;
align-items: center;
justify-content: center;
font-family: ${theme.constants.textFinalFontFamily};
font-size: 1.5rem;
`}
`
export const titleInfo = styled.div`
${({theme})=>css`
display: flex;
width: 90%;
justify-content: space-around;
align-items: center;
background-color: ${theme.colors.secundaryColor};
font-family: ${theme.constants.headingFontFamily};
color: ${theme.colors.primaryColors};
font-size: .8rem;
p{
    min-width: 8%;
    display: flex;
    align-items: center;
    justify-content: center;
};


`}

`
export const cardDetailsStudent = styled.div`
${({theme})=>css`
display: flex;
width: 90%;
align-items: center;
justify-content: space-around;
height: 90px;
margin-bottom: 1rem;
background-color: ${theme.colors.backgroundColor};
flex-direction: column;
`}
`
export const divisionLine = styled.div`
display: flex;
width: 100%;
background-color: black;

`

export const buttonEdit = styled.button`
${({theme})=>css`
display: flex;
width: 10%;
justify-content: center;
align-items: center;
list-style: none;
outline: none;
border: transparent;
cursor: pointer;
background-color: ${theme.colors.secundaryColor};
font-family: ${theme.constants.headingFontFamily};
font-size: .8rem;
font-weight:400;
color: ${theme.colors.primaryColors};
margin-right: 1rem;
border-radius: 0.3rem;
padding: .5rem 0 .5rem 0;
:hover{
    font-weight: 600;
}
`}

`

export const divButtons = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: flex-end;
`