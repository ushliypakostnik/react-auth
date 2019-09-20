import { DefaultTheme } from 'styled-components';

import theme from '../theme';

const themeDark : DefaultTheme = {};

// Dependencies

Object.assign(themeDark, {
  ...theme,
  colors: {
    ...theme.colors,

    // Functional
    color_background: '#2f4050',
    color_text: '#aebfd0',
    color_card: '#263340',
    color_border: '#1c2630',
  },
});

// console.log('Theme dark variables: ', themeDark);
export default themeDark;
