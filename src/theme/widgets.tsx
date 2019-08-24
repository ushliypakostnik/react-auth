import styled, { css } from 'styled-components';

// Containers
////////////////////////////////////////////////////////////

interface PageProps {
  readonly outer? : boolean;
};

export const Page = styled.div<PageProps>`
  height: 100%;
  background: ${props => props.theme.colors.color_white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${props => props.outer && css`
    background: ${props => props.theme.colors.color_light};
  `}
`;

export const CenterWrapper = styled.div`
  margin-top: -15%;
  width: 300px;
`;

// Forms
////////////////////////////////////////////////////////////

export const Input = styled.input`
  margin-bottom: calc(${props => props.theme.sizes.gutter}px * 1.5);
  padding: 0 calc(${props => props.theme.sizes.gutter}px / 2);
  height: ${props => props.theme.sizes.input_height}px;
  background: ${props => props.theme.colors.color_white};
  border: 1px solid ${props => props.theme.colors.color_border};
  font-family:  ${props => props.theme.typography.fontfamily_sans};
  font-size:  ${props => props.theme.typography.fontsize_normal}px;
  line-height: ${props => props.theme.typography.lineheight_normal}px;
  font-weight: ${props => props.theme.typography.fontweight_sans_regular};
  letter-spacing: ${props => props.theme.typography.letterspacing_normal};
`;

export const Button = styled.button`
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
  border: 1px solid ${props => props.theme.colors.color_border};
  margin-bottom: calc(${props => props.theme.sizes.gutter}px / 2);
`;

export const FormGroup = styled.div`
  display: flex;
  position: relative;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${FormGroup} ${Button} {
    width: 100%;
  }
`;

interface FormMessageProps {
  readonly error? : boolean;
  readonly success? : boolean;
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
  line-height: calc(${props => props.theme.sizes.gutter}px / 1.5);

  ${props => props.success && css`
    color: ${props => props.theme.colors.color_success};
  `}
   ${props => props.error && css`
    color: ${props => props.theme.colors.color_error};
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: ${props => props.theme.sizes.gutter}px;
  background: ${props => props.theme.colors.color_white};
  border: 1px solid ${props => props.theme.colors.color_border};

  ${Input},
  ${Button} {
    display: block;
    flex-grow: 1;
  }
`;

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
};

export const TextNormal = styled.span<TextNormalProps>`
  display: inline;
  color: inherit;
  font-family:  ${props => props.theme.typography.fontfamily_sans};
  font-size:  ${props => props.theme.typography.fontsize_normal}px;
  line-height: ${props => props.theme.typography.lineheight_normal}px;
  font-weight: ${props => props.theme.typography.fontweight_sans_regular};
  letter-spacing: ${props => props.theme.typography.letterspacing_normal};
`;

interface TextLargeProps {
  readonly super? : boolean;
  readonly light? : boolean;
};

export const TextLarge = styled.span<TextLargeProps>`
  display: inline;
  color: inherit;
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

