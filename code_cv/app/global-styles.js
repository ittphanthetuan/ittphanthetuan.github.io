import { createGlobalStyle } from 'styled-components';
// import fonts from 'styles/fonts';
const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 14px;
    color: #212F3D;
  }

  @page {
    size: A4;
    margin: 0;
  }
  @media print {
      html, body {
          width: 210mm;
          height: 297mm;        
      }
      .page {
          margin: 0;
          border: initial;
          border-radius: initial;
          width: initial;
          min-height: initial;
          box-shadow: initial;
          background: initial;
          page-break-after: always;
      }
  }

  // body {
  //   font-family: 'Calibri', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  // }

  // body.fontLoaded {
  //   font-family: 'Calibri', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  // }

  // #app {
  //   background-color: #fafafa;
  //   min-height: 100%;
  //   min-width: 100%;
  // }

  // p,
  // label {
  //   font-family: Georgia, Times, 'Times New Roman', serif;
  //   line-height: 1.5em;
  // }
`;

export default GlobalStyle;
