import { injectGlobal } from 'styled-components'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: 'Roboto';
    src: url('./fonts/Roboto-Light.ttf')
         url('./fonts/Roboto-Regular.ttf')
         url('./fonts/Roboto-Medium.ttf');
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  #root {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.5em;
  }
`
