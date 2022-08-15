import styled, { css } from "styled-components";

export const SendButton = styled.button`
${({theme})=>css`
    display: flex;
    width: 50%;
    background-color: ${theme.colors.secundaryColor};
    color: ${theme.colors.primaryColors};
    cursor: pointer;
    list-style: none;
    outline: none;
    align-self: center;
    border: none;
    align-items: center;
    justify-content: center;
    font-family: ${theme.constants.headingFontFamily};
    border-radius: .2rem;
    margin-bottom: 1rem;
    padding: .8rem;
    font-weight: 600;

`}

`