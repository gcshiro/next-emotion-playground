import React from 'react';

import Header from '@/components/Header';
import { css } from '@emotion/react';

const layoutStyle = css`
  margin-top: 60px;
`;

const insetStyle = css`
  padding: 1.5rem;
`;

const DefaultLayout: React.FC = ({ children }) => (
  <div>
    <Header>ヘッダーです</Header>
    <main css={layoutStyle}>
      <div css={insetStyle}>{children}</div>
    </main>
  </div>
);

export default DefaultLayout;
