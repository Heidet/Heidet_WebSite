import { css } from "styled-components";
import { createGlobalStyle } from 'styled-components'

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
  themeBootstrap : "bg-light",
  bg: "#f7fafc",
  github_bg: "#21325e", 
  github_image_border : "#7fb5ff",
  text: "black",
  shadow: "#cac2bc",
  light: "#fff",
  linkedin: "light",
  github_profile__details : "#3a5ba0",
  cardCertifs1: '#08f',
  cardCertifs2: '#f03',

};

export const darkTheme = {
  themeBootstrap : "bg-dark",
  bg: "#1E1E1E",
  text: "white",
  shadow: "#2e4e5c",
  dark: 'rgba(var(--bs-dark-rgb),var(--bs-bg-opacity))!important',
  linkedin: "black",
  github_bg : "black",
  github_image_border : "white",
  github_profile__details : "white",
  cardCertifs1: '#078158',
  cardCertifs2: '#058d7a',

};

