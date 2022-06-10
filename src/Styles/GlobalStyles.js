import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  #root{
    height: 100vh;
    width: 100vw;
    background-color: white;
    display: flex;
    flex-direction: column;

  }
  
`