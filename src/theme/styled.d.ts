import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    // Sizes and layouts
    gutter? : number;
    line_height_standart? : number;
    header_height? : number;
    layout_front? : number;

    // Media breackpoints
    breackpoint_xs_max? : number;

    // Colors
    color_white? : string;
    color_black? : string;
    color_light? : string;

    // Functional
    color_text? : string;
    color_text_light? : string;
    color_link? : string;
    color_link_hover? : string,
    color_disabled? : string,
    color_placeholder? : string,
    color_border? : string;
    color_shadow? : string;

    // Pallette
    color_primary? : string;

    // Typography
    fontfamily_sans? : string;
    fontweight_sans_regular? : number;
    fontweight_sans_bold? : number;
    letterspacing_normal? : string;

    fontsize_large? : number;
    fontsize_normal? : number;
    fontsize_small? : number;

    shadow_offset_x? : number;
    shadow_offset_y? : number;
    shadow_size? : number;
    shadow_spread: number;

    // Good line height for all font sizes
    lineheight_large? : number | undefined;
    lineheight_normal? : number | undefined;
    lineheight_small? : number | undefined;
  }
};
