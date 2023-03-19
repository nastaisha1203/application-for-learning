import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import img from 'img/5.jpg';

export const GlobalStyle = createGlobalStyle`
 html {
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
body {
  margin: 0;
  min-height: 100vh;
    background-image: url(${img});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  color: #000;
  background-color: rgb(195 169 127);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
img {
  display: block;
  width: 100%;
  height: auto;
}
ul {
 list-style: none;
}
p, h1, h2, ol, ul, h3 {
  margin: 0;
  padding: 0;
}
  `;
