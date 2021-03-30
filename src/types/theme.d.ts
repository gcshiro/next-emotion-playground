import '@emotion/react';
import { theme } from '@/styles/designToken/theme';

type CustomTheme = typeof theme;

declare module '@emotion/react' {
  // eslint-disable-next-line
  export interface CustomTheme extends Theme {}
}
