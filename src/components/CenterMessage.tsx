import React from 'react';

import styled, { keyframes } from 'styled-components';
import { TextLarge } from '../theme/widgets';

import logo from '../images/logo.svg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  height: 60px;
  pointer-events: none;
  display: inline-block;
  animation: ${rotate} infinite calc(${props => props.theme.effects.transition_duration} * 20) ${props => props.theme.effects.transition_timingfunction};

  @media (max-width: ${props => props.theme.breackpoints.breackpoint_xs_max}) {
    animation: none;
  }
`;

const EntryHeaderWpapper = styled.div`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;

  ${TextLarge} {
    margin-top: 0;
  }
`;

interface CenterMessageProps {
  children? : React.ReactNode;
};

const CenterMessage : React.SFC<CenterMessageProps> = props => {
  return (
    <EntryHeaderWpapper>
      <Logo src={logo} alt="logo" />
      { props.children }
    </EntryHeaderWpapper>
  );
};

export default CenterMessage;
