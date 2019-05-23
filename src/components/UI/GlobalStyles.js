import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 300;
  src: url('/static/fonts/source-sans-pro-v11-latin_latin-ext-300.eot'); /* IE9 Compat Modes */
  src: local('Source Sans Pro Light'), local('SourceSansPro-Light'),
    url('/static/fonts/source-sans-pro-v11-latin_latin-ext-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('/static/fonts/source-sans-pro-v11-latin_latin-ext-300.woff2') format('woff2'), /* Super Modern Browsers */
    url('/static/fonts/source-sans-pro-v11-latin_latin-ext-300.woff') format('woff'), /* Modern Browsers */
    url('/static/fonts/source-sans-pro-v11-latin_latin-ext-300.ttf') format('truetype'), /* Safari, Android, iOS */
    url('/static/fonts/source-sans-pro-v11-latin_latin-ext-300.svg#SourceSansPro') format('svg'); /* Legacy iOS */
}

@font-face {
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  src: url('/static/fonts/source-sans-pro-v11-latin_latin-ext-regular.eot'); /* IE9 Compat Modes */
  src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),
    url('/static/fonts/source-sans-pro-v11-latin_latin-ext-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('/static/fonts/source-sans-pro-v11-latin_latin-ext-regular.woff2') format('woff2'), /* Super Modern Browsers */
    url('/static/fonts/source-sans-pro-v11-latin_latin-ext-regular.woff') format('woff'), /* Modern Browsers */
    url('/static/fonts/source-sans-pro-v11-latin_latin-ext-regular.ttf') format('truetype'), /* Safari, Android, iOS */
    url('/static/fonts/source-sans-pro-v11-latin_latin-ext-regular.svg#SourceSansPro') format('svg'); /* Legacy iOS */
}
html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 2;
    font-family: 'Source Sans Pro';
    background: ${props => props.theme.bgDark};
    color: ${props => props.theme.white};
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.white};
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyle;
