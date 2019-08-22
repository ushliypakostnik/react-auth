import styled from 'styled-components';

export const OuterPage = styled.div`
  height: 100%;
  background: ${props => props.theme.colors.color_light};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
