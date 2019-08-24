import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    // Sizes and layouts
    sizes? : {
      gutter? : number;
      input_height? : number;
      header_height? : number;
      layout_front? : number;
    };

    // Media breackpoints
    breackpoints? : {
      breackpoint_xs_max? : number;
    };

    // Colors
    colors? : {
      // Pallette
      color_white? : string;
      color_black? : string;
      color_mint? : string;
      color_red? : string;
      color_green? : string;

      // Functional
      color_light? : string;
      color_text? : string;
      color_text_light? : string;
      color_link? : string;
      color_link_hover? : string,
      color_disabled? : string,
      color_placeholder? : string,
      color_border? : string;
      color_shadow? : string;

      color_primary? : string;
      color_success? : string;
      color_error? : string;
    };

    // Typography
    typography? : {
      fontfamily_sans? : string;
      fontweight_sans_regular? : number;
      fontweight_sans_bold? : number;
      letterspacing_normal? : string;

      fontsize_large? : number;
      fontsize_normal? : number;
      fontsize_small? : number;

      line_height_standart? : number;
      // Good line height for all font sizes
      lineheight_large? : number;
      lineheight_normal? : number;
      lineheight_small? : number;
    };

    // Shadow
    shadows? : {
      shadow_offset_x? : number;
      shadow_offset_y? : number;
      shadow_size? : number;
      shadow_spread: number;
    };

    // Effects
    effects? : {
      transition_duration: string,
      transition_timingfunction: string,
    }
  }
};
