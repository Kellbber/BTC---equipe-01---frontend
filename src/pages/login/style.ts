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
    /* display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; */
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
    width: 100%;
    background-color: ${theme.colors.secundaryColor};
    align-items: center;
    justify-content: center;
  `}
`;

export const LoginSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;
    width: 38rem;
    height: 28rem;
    border-radius: 5px;
    background: ${theme.colors.primaryColors};
  `}
`;

export const div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 7rem;
  ${({ theme }) => css`
    input {
      box-sizing: border-box;
      position: relative;
      width: 23rem;
      height: 3rem;
      background: ${theme.colors.primaryColors};
      border: 2px solid rgba(34, 32, 32, 0.5);
      border-radius: 1rem;
    }
  `}
`;

export const loginborder = styled.section`
  ${({ theme }) => css`
    width: 38rem;
    height: 5rem;
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
    font-size: 25px;
    line-height: 30px;
    justify-content: center;
    color: ${theme.colors.primaryColors};
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
