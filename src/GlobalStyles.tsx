import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: "Roboto Condensed", sans-serif;
    background-color: #f1f1f1;
    scroll-behavior: smooth;
  background-color: #222;
  }

  body {
    margin: 0;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    font-family: inherit;
  }
`
