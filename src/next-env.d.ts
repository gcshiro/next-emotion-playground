/// <reference types="next" />
/// <reference types="next/types/global" />

import '@emotion/react';
import { theme } from '@/styles/designToken/theme';

type CustomTheme = typeof theme;
// https://emotion.sh/docs/typescript#define-a-theme
declare module '@emotion/react' {
  // eslint-disable-next-line
  export interface Theme extends CustomTheme {}
}
