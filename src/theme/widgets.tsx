import styled, { css, keyframes } from 'styled-components';

// Content
////////////////////////////////////////////////////////////

export const A = styled.a`
  white-space: nowrap;
  text-decoration: underline;
  color: ${props => props.theme.colors.color_link};

  &:hover {
    text-decoration: none;
    color: ${props => props.theme.colors.color_link_hover};
  }
`;

export const TextSmall = styled.span`
  display: inline;
  color: inherit;
  font-family:  ${props => props.theme.typography.fontfamily_sans};
  font-size:  ${props => props.theme.typography.fontsize_small}px;
  line-height: ${props => props.theme.typography.lineheight_small}px;
  font-weight: ${props => props.theme.typography.fontweight_sans_regular};
  letter-spacing: ${props => props.theme.typography.letterspacing_normal};
`;

interface TextNormalProps {
  readonly label? : boolean;
  readonly bold? : boolean;
  readonly uppercase? : boolean;
};

export const TextNormal = styled.span<TextNormalProps>`
  display: inline;
  color: ${props => props.theme.colors.color_text};
  font-family:  ${props => props.theme.typography.fontfamily_sans};
  font-size:  ${props => props.theme.typography.fontsize_normal}px;
  line-height: ${props => props.theme.typography.lineheight_normal}px;
  font-weight: ${props => props.theme.typography.fontweight_sans_regular};
  letter-spacing: ${props => props.theme.typography.letterspacing_normal};

  ${props => props.bold && css`
    font-weight: ${props => props.theme.typography.fontweight_sans_bold};
  `}

  ${props => props.uppercase && css`
    text-transform: uppercase;
  `}
`;

interface TextLargeProps {
  readonly super? : boolean;
  readonly light? : boolean;
};

export const TextLarge = styled.span<TextLargeProps>`
  display: inline;
  color: ${props => props.theme.colors.color_text};
  font-family:  ${props => props.theme.typography.fontfamily_sans};
  font-size:  ${props => props.theme.typography.fontsize_large}px;
  line-height: ${props => props.theme.typography.lineheight_large}px;
  font-weight: ${props => props.theme.typography.fontweight_sans_bold};
  letter-spacing: ${props => props.theme.typography.letterspacing_normal};

  ${props => props.super && css`
    font-size:  calc(${props => props.theme.typography.fontsize_large}px * 4);
    line-height: calc(${props => props.theme.typography.lineheight_large}px * 4);
  `}

  ${props => props.light && css`
    opacity: 0.5;
  `}
`;

export const TextHeader = styled.span<TextLargeProps>`
  display: inline;
  color: ${props => props.theme.colors.color_header};
  font-family:  ${props => props.theme.typography.fontfamily_sans};
  font-size:  calc(${props => props.theme.typography.fontsize_large}px * 1.5);
  line-height: ${props => props.theme.typography.lineheight_large}px;
  font-weight: ${props => props.theme.typography.fontweight_sans_bold};
  letter-spacing: ${props => props.theme.typography.letterspacing_normal};

  ${props => props.super && css`
    font-size:  calc(${props => props.theme.typography.fontsize_large}px * 4);
    line-height: calc(${props => props.theme.typography.lineheight_large}px * 4);
  `}

  ${props => props.light && css`
    opacity: 0.5;
  `}

  @media screen and (max-width: ${props => props.theme.breackpoints.xs_middle}) {
    display: inline-block;
    margin-top: 20px;
  }
`;

interface TextStringProps {
  readonly top? : boolean;
};

export const TextString = styled.div<TextStringProps>`
  text-align: center;
  display: block;
  margin-bottom: ${props => props.theme.sizes.gutter}px;

  ${props => props.top && css`
    margin-bottom: calc(${props => props.theme.sizes.gutter}px / 4);
  `}

  > * {
    white-space: nowrap;
  }
`;


// Forms
////////////////////////////////////////////////////////////

export const Input = styled.input`
  padding: 0 calc(${props => props.theme.sizes.gutter}px / 2);
  height: ${props => props.theme.sizes.input_height}px;
  background: ${props => props.theme.colors.color_white};
  border: 1px solid ${props => props.theme.colors.color_border};
  border-radius: ${props => props.theme.border_radius.small};
  font-family:  ${props => props.theme.typography.fontfamily_sans};
  font-size:  ${props => props.theme.typography.fontsize_normal}px;
  line-height: ${props => props.theme.typography.lineheight_normal}px;
  font-weight: ${props => props.theme.typography.fontweight_sans_regular};
  letter-spacing: ${props => props.theme.typography.letterspacing_normal};
`;

interface ButtonProps {
  readonly brand? : string;
};

export const Button = styled.button<ButtonProps>`
  border: none;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  height: ${props => props.theme.sizes.input_height}px;
  color: ${props => props.theme.colors.color_white};
  background: ${props => props.theme.colors.color_primary};
  font-family:  ${props => props.theme.typography.fontfamily_sans};
  font-size:  ${props => props.theme.typography.fontsize_normal}px;
  line-height: ${props => props.theme.typography.lineheight_normal}px;
  font-weight: ${props => props.theme.typography.fontweight_sans_bold};
  letter-spacing: ${props => props.theme.typography.letterspacing_normal};
  border-radius: ${props => props.theme.border_radius.large};
  margin-bottom: calc(${props => props.theme.sizes.gutter}px / 2);

  ${props => props.brand === "facebook" && css`
    background: ${props => props.theme.colors.color_fb};
  `}

  ${props => props.brand === "vkontakte" && css`
    background: ${props => props.theme.colors.color_vk};
  `}
`;

export const FormGroup = styled.div`
  display: flex;
  position: relative;
  padding-bottom: calc(${props => props.theme.sizes.gutter}px * 1.5);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${FormGroup} ${Button} {
    width: 100%;
  }
`;

interface FormMessageProps {
  readonly state? : string;
};

export const FormMessage = styled.div<FormMessageProps>`
  display: block;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  color: ${props => props.theme.colors.color_text};
  top: calc(${props => props.theme.sizes.input_height}px * 1.1);

  ${TextSmall} {
    display: inline-block;
    line-height: calc(${props => props.theme.sizes.gutter}px / 1.5);
  }

  ${props => props.state === "success" && css`
    color: ${props => props.theme.colors.color_success};
  `}

   ${props => props.state === "error" && css`
    color: ${props => props.theme.colors.color_error};
  `}
`;

interface FormProps {
  readonly bottom? : boolean;
};

export const Form = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: ${props => props.theme.sizes.gutter}px;
  background: ${props => props.theme.colors.color_card};
  border: 1px solid ${props => props.theme.colors.color_border};
  border-radius: ${props => props.theme.border_radius.large};

  ${Input},
  ${Button} {
    display: block;
    flex-grow: 1;
  }

   ${props => props.bottom && css`
      padding-bottom:  0;
  `}
`;


// Containers
////////////////////////////////////////////////////////////

export interface PageProps {
  readonly empty? : boolean;
  readonly footer? : boolean;
};

export const Page = styled.div<PageProps>`
  height: calc(100% - 85px);
  background: ${props => props.theme.colors.color_background};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${props => props.footer && css`
    padding-bottom: calc(${props => props.theme.sizes.gutter}px + 65px);

    @media screen and (max-width: ${props => props.theme.breackpoints.xs_max}) {
      padding-bottom: calc((${props => props.theme.sizes.gutter}px / 2 ) + 65px);
    }
  `}

  ${props => props.empty && css`
    height: 100%;
    height: 100vh;
  `};

  @media screen and (max-width: ${props => props.theme.breackpoints.xs_middle}) {
    height: auto;
  }
`;

export const CenterWrapper = styled.div`
  padding-bottom: 13vh;
  width: 300px;

  @media screen and (max-width: ${props => props.theme.breackpoints.xs_max}) {
    padding-top: 20px;
    padding-bottom: 0;
  }

  @media screen and (max-width: ${props => props.theme.breackpoints.xs_middle}) {
    padding-top: 10px;
    padding-bottom: 0;
  }
`;

export const EntryHeaderWpapper = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${TextLarge} {
    margin-top: 0;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: calc(${props => props.theme.sizes.gutter}px / 2);
  padding-bottom: calc(${props => props.theme.sizes.gutter}px / 2);
  background: ${props => props.theme.colors.color_background};
  border-top: 1px solid ${props => props.theme.colors.color_border};
`;


export interface CardProps {
  readonly switch? : boolean;
  readonly after? : boolean;
};

export const Card = styled.div<CardProps>`
  display: inline-block;
  color: ${props => props.theme.colors.color_text};
  padding: calc(${props => props.theme.sizes.gutter}px / 2);
  background: ${props => props.theme.colors.color_card};
  border: 1px solid ${props => props.theme.colors.color_border};
  border-radius: ${props => props.theme.border_radius.large};

  ${props => props.switch && css`
    white-space: nowrap;
  `}

  ${props => props.after && css`
    margin-left: ${props => props.theme.sizes.gutter}px;
  `}
`;

// Animation and elements
////////////////////////////////////////////////////////////

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Logo = styled.img`
  height: 60px;
  pointer-events: none;
  display: inline-block;
  animation: ${rotate} infinite calc(${props => props.theme.effects.transition_duration} * 20) ${props => props.theme.effects.transition_timingfunction};
`;

