import styled, { css } from 'styled-components';

// Containers
////////////////////////////////////////////////////////////

export const OuterPage = styled.div`
  height: 100%;
  background: ${props => props.theme.colors.color_light};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

interface FormMessageProps {
  readonly error: boolean;
};

export const FormMessage = styled.div<FormMessageProps>`
  display: block;
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  top: calc(${props => props.theme.sizes.input_height}px * 1.05);
  line-height: calc(${props => props.theme.sizes.gutter}px / 2);

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

export const TextSmall = styled.p`
  display: inline;
  color: inherit;
  font-family:  ${props => props.theme.typography.fontfamily_sans};
  font-size:  ${props => props.theme.typography.fontsize_small}px;
  line-height: ${props => props.theme.typography.lineheight_small}px;
  font-weight: ${props => props.theme.typography.fontweight_sans_regular};
  letter-spacing: ${props => props.theme.typography.letterspacing_normal};
`;

export const TextLarge = styled.p`
  display: inline;
  color: inherit;
  font-family:  ${props => props.theme.typography.fontfamily_sans};
  font-size:  ${props => props.theme.typography.fontsize_large}px;
  line-height: ${props => props.theme.typography.lineheight_large}px;
  font-weight: ${props => props.theme.typography.fontweight_sans_bold};
  letter-spacing: ${props => props.theme.typography.letterspacing_normal};
`;
