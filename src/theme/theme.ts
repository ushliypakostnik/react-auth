import { DefaultTheme, createGlobalStyle } from 'styled-components';

const theme : DefaultTheme = {
  // Sizes and layouts
  sizes: {
    gutter: 20,
    header_height: 70,
    input_height: 40,
    layout_front: 900,
  },

  // Media breackpoints
  breackpoints: {
    breackpoint_xs_max: 750,
  },

  // Colors
  colors: {
    // Pallette
    color_white: '#ffffff',
    color_black: '#000000',
    color_mint: '#00A287',
    color_red: '#ff3237',
    color_green: '#00C20D',

    // Functional
    color_light: '#fafafa',
    color_text: '#6c7a89',
    color_text_light: 'rgba(108, 122, 137, 0.75)',
    color_link: '#1890ff',
    color_border: '#eff2f5',
    color_shadow: 'rgba(0, 0, 0, 0.15)',
  },

  // Typography
  typography: {
    fontfamily_sans: 'sans-serif',
    fontweight_sans_regular: 400,
    fontweight_sans_bold: 700,
    letterspacing_normal: 'normal',

    fontsize_large: 20,
    fontsize_normal: 16,
    fontsize_small: 14,

    line_height_standart: 1.428571429,
  },

  // Shadows
  shadows: {
    shadow_offset_x: 0,
    shadow_offset_y: 2,
    shadow_size: 4,
    shadow_spread: -1,
  },

  // Effects
  effects: {
    transition_duration: '0.2s',
    transition_timingfunction: 'linear',
  }
};

// Dependencies

Object.assign(theme, {
  ...theme,
  colors: {
    ...theme.colors,
    color_primary: theme.colors.color_mint,
    color_success: theme.colors.color_green,
    color_error: theme.colors.color_red,
    color_link_hover: theme.colors.color_link,
    color_disabled: theme.colors.color_border,
    color_placeholder: theme.colors.color_border,
  },
  // Good line height for all font sizes
  typography: {
    ...theme.typography,
    lineheight_large: Math.floor(theme.typography.fontsize_large * theme.typography.line_height_standart),
    lineheight_normal: Math.floor(theme.typography.fontsize_normal * theme.typography.line_height_standart),
    lineheight_small: Math.floor(theme.typography.fontsize_small * theme.typography.line_height_standart),
  },
});

// console.log('Theme variables: ', theme);

export const GlobalStyle = createGlobalStyle`
  #root,
  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0
    padding: 0;
    color: ${theme.colors.color_text};
    background-color: ${theme.colors.color_white};
    font-family:  ${theme.typography.fontfamily_sans};
    font-size:  ${theme.typography.fontsize_small}px;
    line-height: ${theme.typography.lineheight_small}px;
    font-weight:  ${theme.typography.fontweight_sans_regular};
    letter-spacing: ${theme.typography.letterspacing_normal};
    overflow-x: hidden;
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: ${theme.colors.color_link};
    text-decoration: none;
    &:hover {
      color: ${theme.colors.color_link_hover};
    }
  }

  ul {
    padding-left: 0;
    list-style: none;
  }

  button,
  input,
  textarea,
  select,
  a {
    outline: none !important;
    &:hover,
    &:active,
    &:focus {
      outline: none !important;
    }
  }

  // Placeholders
  ::-webkit-input-placeholder,
  ::-moz-placeholder,
  :-moz-placeholder,
  :-ms-input-placeholder {
    color: ${theme.colors.color_placeholder};
  }

  img {
    border-style: none; // Remove the border on images inside links in IE 10.
  }

  button,
  input {
    overflow: visible; // Show the overflow in Edge
  }

  button,
  select {
    text-transform: none; // Remove the inheritance of text transform in Firefox.
  }

  textarea {
    overflow: auto; // Remove the default vertical scrollbar in IE 10+.
  }

  strong {
    font-weight:  ${theme.typography.fontweight_sans_bold};
  }
`;

export default theme;
