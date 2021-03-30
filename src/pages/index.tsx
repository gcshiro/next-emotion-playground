import React from 'react';
import { css } from '@emotion/react';
import { CustomTheme } from '@/types/theme';

const style = (theme: CustomTheme) => {
  console.log(theme.colors.red);

  return css`
    color: ${theme.colors.red};
    /* stylelint-disable-next-line */
  `;
};

const Home = () => <div css={(theme) => style(theme)}>Home</div>;

export default Home;
