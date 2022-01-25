// globalStyles.js
import { createGlobalStyle } from 'styled-components';
// import * as variable from './lib';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800;900&display=swap');

  * { 
    font-family: 'Heebo', sans-serif;
    color: #333333;

    &, &:before, &:after {
      box-sizing: border-box;
    }
  }

  a{
    text-decoration: none;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
  }

  ol, ul {
    list-style: none;
  }

  header{
    padding: 42px 16px;

    @media(min-width: 769px){
      padding: 42px 100px;
    }

  }

  main{
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0 16px;

    @media(min-width: 769px){
      padding: ${'0px 100px'};
    }
  }

  button{
    cursor: pointer;
  }

`;

export default GlobalStyle;
