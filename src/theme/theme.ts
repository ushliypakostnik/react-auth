import { DefaultTheme, createGlobalStyle } from 'styled-components';

const theme : DefaultTheme = {
  // Sizes and layouts
  gutter: 20,
  line_height_standart: 1.428571429,
  header_height: 70,
  layout_front: 900,

  // Media breackpoints
  breackpoint_xs_max: 750,

  // Colors
  color_white: '#ffffff',
  color_black: '#000000',
  color_light: '#fafafa',

  // Functional
  color_text: '#6c7a89',
  color_text_light: 'rgba(108, 122, 137, 0.75)',
  color_link: '#1890ff',
  color_border: '#eff2f5',
  color_shadow: 'rgba(0, 0, 0, 0.15)',

  // Pallette
  color_primary: '#e9e9eb',

  // Typography
  fontfamily_sans: 'sans-serif',
  fontweight_sans_regular: 400,
  fontweight_sans_bold: 700,
  letterspacing_normal: 'normal',

  fontsize_large: 20,
  fontsize_normal: 16,
  fontsize_small: 14,

  // Shadows
  shadow_offset_x: 0,
  shadow_offset_y: 2,
  shadow_size: 4,
  shadow_spread: -1,
};

Object.assign(theme, {
  color_link_hover: theme.color_link,
  color_disabled: theme.color_border,
  color_placeholder: theme.color_border,

  // Good line height for all font sizes
  lineheight_large: Math.round(theme.fontsize_large * theme.line_height_standart),
  lineheight_normal: Math.round(theme.fontsize_normal * theme.line_height_standart),
  lineheight_small: Math.round(theme.fontsize_small * theme.line_height_standart),
});

export const GlobalStyle : any = createGlobalStyle`
  body {
    margin: 0
    padding: 0;
    color: ${theme.color_text};
    background-color: ${theme.color_white};
    font-family:  ${theme.fontfamily_sans};
    font-size:  ${theme.fontsize_small}px;
    line-height: ${theme.lineheight_small}px;
    letter-spacing: ${theme.letterspacing_normal};
    overflow-x: hidden;
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: ${theme.color_link};
    text-decoration: none;
    &:hover {
      color: ${theme.color_link_hover};
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
    color: ${theme.color_placeholder};
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
`;

export default theme;
