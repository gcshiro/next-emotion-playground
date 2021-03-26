export const colors = {
  white: '#fff',
  black: '#000',
} as const;

export type Colors = keyof typeof colors;
