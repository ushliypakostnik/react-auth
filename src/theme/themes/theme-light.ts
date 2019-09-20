import { DefaultTheme } from 'styled-components';

import theme from '../theme';

const themeLight : DefaultTheme = {};

// Dependencies

Object.assign(themeLight, {
  ...theme,
  colors: {
    ...theme.colors,

    // Functional
    color_background: '#fafafa',
    color_text: '#6c7a89',
    color_card: theme.colors.color_white,
    color_border: '#dfe5eb',
  },
});

// console.log('Theme light variables: ', themeLight);
export default themeLight;
