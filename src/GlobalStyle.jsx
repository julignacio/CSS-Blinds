import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
    transition: all 2s ease;
      background-color: ${props => props.dark ? 'black' : 'white'};
    }
`;