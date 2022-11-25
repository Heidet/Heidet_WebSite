import { css } from "styled-components";
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import styled from "styled-components";

export const imageZoomEffect = css`
  img {
    transition: 0.8s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const TitleStyles = css`
  .title {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h1 {
      font-size: 3rem;
      text-transform: uppercase;
      span {
        color: #fc4958;
      }
    }
    .yellow {
      color: ##2aa9e1;
    }
    p {
      padding: 0 10vw;
      font-size: 1.1rem;
      line-height: 2rem;
      letter-spacing: 0.1rem;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .title {
      gap: 1rem;
      h1 {
        font-size: 2rem;
      }
      p {
        padding: 0 1vw;
      }
    }
  }
`;

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
    // height: 100vh;
    background: ${({ theme }) => theme.bg};
    padding: 0;
    margin: 0;
    transition: background-color 0.1s ease;
  }
`;  

export const lightTheme = {
  bg: "#f7fafc",
  text: "black",
  shadow: "#cac2bc",
  light: "#fff",
  linkedin: "light"
};

export const darkTheme = {
  bg: "#1a202c",
  text: "white",
  shadow: "#2e4e5c",
  light: "#4d7281",
  linkedin: "black"
};

