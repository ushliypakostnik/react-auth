import * as React from 'react';

import styled from 'styled-components';

import { Logo } from '../../theme/widgets';

import logo from '../../images/logo.svg';

const Loading : React.SFC<any> = () => {
  return (
    <Logo
      src={ logo }
      alt="loading"
    />
  );
};

export default Loading;
