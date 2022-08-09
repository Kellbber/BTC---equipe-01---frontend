import styled, { css } from "styled-components";
import background from "../../assets/images/background-login.png";

export const logincss = styled.section`
  ${({ theme }) => css`
    background-image: url(${background});
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    min-width: 100vw;
  `}
`;

export const header = styled.header`
  ${({ theme }) => css`
    position: absolute;
    width: 1920px;
    height: 70px;
    left: 0px;
    top: 0px;

    background: #2ea8dc;
  `}
`;
export const h1 = styled.h1`
  ${({ theme }) => css`
    position: absolute;
    width: 197px;
    height: 39px;
    left: 750px;
    top: 0px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 39px;
    color: #ffffff;
  `}
`;

export const LoginSection = styled.section`
  ${({ theme }) => css`
    position: absolute;
    width: 597px;
    height: 453px;
    left: 500px;
    top: 221px;
    background: #ffffff;
    border-radius: 5px;
  `}
`;

export const LoginInput = styled.input`
  ${({ theme }) => css`
    box-sizing: border-box;
    position: absolute;
    width: 372px;
    height: 63px;
    left: 120px;
    top: 200px;
    background: #ffffff;
    border: 2px solid rgba(34, 32, 32, 0.5);
    border-radius: 5px;
  `}
`;
export const loginborder = styled.section`
  ${({ theme }) => css`
    position: absolute;
    width: 597px;
    height: 85px;
    background: #2ea8dc;
    border-radius: 5px 5px 0px 0px;
  `}
`;
export const p = styled.p`
  ${({ theme }) => css``}
  position: absolute;
  left: 250px;
  top: 0px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;

  color: #ffffff;
`;
