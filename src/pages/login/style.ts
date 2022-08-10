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

export const LoginSection = styled.section`
  ${({ theme }) => css`
    position: absolute;
    width: 597px;
    height: 453px;
    left: 530px;
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
export const iconConfig = styled.div`
  ${({ theme }) => css`
    width: 65%;

    p {
      text-align: center;
      color: ${theme.colors.primaryColors};
      display: flex;

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
