import React from 'react';
import { css, Theme } from '@emotion/react';

import DefaultLayout from '@/layouts/Default';

const baseButtonStyle = (theme: Theme) => css`
  padding: 8px 20px;
  margin: 0;
  background-color: ${theme.colors.black};
  border: none;
  border-radius: 4px;
  outline: none;
`;

const style = ({ theme, loading }: { theme: Theme; loading: boolean }) => {
  if (loading) {
    return css`
      /* stylelint-disable */
      color: ${theme.colors.red};
      opacity: 0.8;
      ${baseButtonStyle(theme)};
    `;
  }

  return css`
    color: ${theme.colors.white};
    ${baseButtonStyle(theme)};
  `;
};

const Home = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  return (
    <DefaultLayout>
      <h1>Home画面です</h1>
      <input type="checkbox" onClick={() => setLoading(!loading)} />

      {/* stylelint-disable-next-line */}
      <button css={(theme) => style({ theme, loading })}>ボタン</button>
    </DefaultLayout>
  );
};

export default Home;
