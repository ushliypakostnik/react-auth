import styled from 'styled-components';

export const OuterPage = styled.div`
  height: 100%;
  background: ${props => props.theme.colors.color_light};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  margin-bottom: ${props => props.theme.sizes.gutter}px;
  height: ${props => props.theme.sizes.input_height}px;
  background: ${props => props.theme.colors.color_white};
  border: 1px solid ${props => props.theme.colors.color_border};
`;

export const Button = styled.button`
  cursor: pointer;
  color: ${props => props.theme.colors.color_white};
  background: ${props => props.theme.colors.color_primary};
  border: 1px solid ${props => props.theme.colors.color_border};
`;

export const Link = styled.a`
  white-space: nowrap;
  text-decoration: underline;
  color: ${props => props.theme.colors.color_link};

  &:hover {
    text-decoration: none;
    color: ${props => props.theme.colors.color_link_hover};
  }
`;

export const Form = styled.form`
  text-align: center;
  padding: ${props => props.theme.sizes.gutter}px;
  background: ${props => props.theme.colors.color_white};
  border: 1px solid ${props => props.theme.colors.color_border};

  ${Input},
  ${Button} {
    display: block;
    width: 100%;
  }
`;
