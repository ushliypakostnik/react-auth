import styled, { createGlobalStyle } from 'styled-components';
/*
const lineHeightStandart = 1.428571429;

const GUIDELINE = {
  // Sizes and layouts
  gutter: 20,
  header_height: 48,
  subheader_height: 80,
  layout_front: 900,

  // Media breackpoints
  breackpoint_xs_max: 750,

  // Colors
  color_white: '#ffffff',
  color_black: '#000000',
  color_light: '#fafafa',
  color_text: '#6c7a89',
  color_text_light: 'rgba(108, 122, 137, 0.75)',
  color_link: '#1890ff',
  color_border: '#eff2f5',
  color_shadow: 'rgba(0, 0, 0, 0.15)',

  // Typography
  fontfamily_sans: 'sans-serif',
  fontweight_sans_regular: 400,
  fontweight_sans_bold: 700,
  letterspacing_normal: 'normal',

  fontsize_large: 20,
  fontsize_normal: 16,
  fontsize_small: 14,

  // Shadows
  shadow_offset_x: '0',
  shadow_offset_y: '2px',
  shadow_size: '4px',
  shadow_spread: '-1px',
}

Object.assign(GUIDELINE, {
  color_link_hover: GUIDELINE.color_link,
  color_placeholder: GUIDELINE.color_border,

  // Good line height for all font sizes
  lineheight_large: Math.round(GUIDELINE.fontsize_large * lineHeightStandart),
  lineheight_normal: Math.round(GUIDELINE.fontsize_normal * lineHeightStandart),
  lineheight_small: Math.round(GUIDELINE.fontsize_small * lineHeightStandart),
});

Object.assign(GUIDELINE, {
  color_link: GUIDELINE.color_text,
  color_link_hover: GUIDELINE.color_text,
});

// console.log(GUIDELINE);

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0
    padding: 0;
    color: ${GUIDELINE.color_text};
    background-color: ${GUIDELINE.color_white};
    font-family:  ${GUIDELINE.fontfamily_sans};
    font-size:  ${GUIDELINE.fontsize_small}px;
    line-height: ${GUIDELINE.lineheight_small}px;
    letter-spacing: ${GUIDELINE.letterspacing_normal};
    overflow-x: hidden;
    backface-visibility: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: ${GUIDELINE.color_link};
    text-decoration: none;

    &:hover {
      color: ${GUIDELINE.color_link_hover};
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
    color: ${GUIDELINE.color_placeholder};
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
`

export const Container = styled.div`
  padding-left: ${GUIDELINE.gutter}px;
  padding-right: ${GUIDELINE.gutter}px;
`

export const PageHeader = styled.header`
  position: fixed;
  top: ${GUIDELINE.header_height}px;
  left: 0;
  right: 0;
  width: 100%;
  z-index: calc(${GUIDELINE.layout_front} - 50);
  background-color: ${GUIDELINE.color_light};
  padding-top: ${GUIDELINE.gutter}px;
  padding-bottom: ${GUIDELINE.gutter}px;
  box-shadow: ${GUIDELINE.shadow_offset_x} ${GUIDELINE.shadow_offset_y} ${GUIDELINE.shadow_size} ${GUIDELINE.shadow_spread} ${GUIDELINE.color_shadow};
`

export const PageContent = styled.main`
  background-color: ${GUIDELINE.color_white};
`
export const AlertWrapper= styled.div`
  padding: ${GUIDELINE.gutter}px;
`

export default GUIDELINE;*/
