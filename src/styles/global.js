import { createGlobalStyle } from 'styled-components'
import NerkoOne from '../assets/NerkoOne-Regular.ttf'

export default createGlobalStyle`
  @font-face {
    font-family: 'Nerko One';
    src: url(${NerkoOne});
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: 0;
    outline: 0;
    font-family: 'Nerko One', cursive;
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    overflow-x: hidden;
  }
  body {
    height: 100vh;
    scroll-behavior: smooth;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100% !important;
    height: 100%;
    width: 100vw;
    background-color: ${(props) => props.theme.colors.green};
  }


  .main-content {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
    justify-content: center;
    flex-direction: column;
    background-color: ${(props) => props.theme.colors.gray1};

    @media screen and (max-width: 1280px) {
      margin-top: 14px;
    }

    @media screen and (max-width: 480px) {
      margin-top: 0px;
    }
  }

`
