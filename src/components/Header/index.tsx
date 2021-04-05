import React from 'react';
import { css, Theme } from '@emotion/react';

const style = (theme: Theme) => css`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1.125rem 1.25rem;
  background-color: ${theme.colors.white};
`;

const Header: React.FC = ({ children }) => (
  <header css={style}>{children}</header>
);

export default Header;
