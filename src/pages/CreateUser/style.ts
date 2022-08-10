import styled, { css } from "styled-components";
import background from "../../assets/images/background-register.png";
import icon from "../../assets/images/icon.svg";
export const createcss = styled.section`
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
