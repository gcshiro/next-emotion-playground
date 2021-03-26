import { css, Global } from '@emotion/react';

const style = css`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  figure,
  blockquote,
  dl,
  dd,
  dt {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
  }
`;

const GlobalStyle = <Global styles={style} />;

export default GlobalStyle;
