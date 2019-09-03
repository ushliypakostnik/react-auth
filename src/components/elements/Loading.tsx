import * as React from 'react';

import styled from 'styled-components';

import { rotate } from '../../theme/widgets';

import logo from '../../images/logo.svg';

const Logo = styled.img`
  height: 80px;
  width: 80px;
  display: inline-block;
  animation: ${rotate} infinite calc(${props => props.theme.effects.transition_duration} * 5) ${props => props.theme.effects.transition_timingfunction};
`;

const Loading : React.SFC<any> = () => {
  return (
    <Logo
      src={ logo }
      alt="loading"
    />
  );
};

export default Loading;
