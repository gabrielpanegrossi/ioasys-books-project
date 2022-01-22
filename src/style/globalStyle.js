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
  padding: 0 15px;
  margin: 42px auto;

  @media(min-width: 769px){
    padding: 0 100px;
  }

}

main{
  padding: 0 15px;

  @media(min-width: 769px){
    padding: ${'80px 100px'};
  }
}
`;

export default GlobalStyle;
