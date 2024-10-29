import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #1b1f23;
    color: #333;
    line-height: 1.6;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #0077b6;
  }

  h1, h2, h3 {
    color: #023e8a;
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    color: #555;
    margin-bottom: 1.5rem;
  }
`;

export default GlobalStyles;