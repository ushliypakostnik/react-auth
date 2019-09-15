import * as React from 'react';

import logo from '../../images/logo.svg';

import { EntryHeaderWpapper, Logo } from '../../theme/widgets';

interface CenterMessageProps {
  children? : React.ReactNode;
};

const CenterMessage : React.SFC<CenterMessageProps> = (props) => {

  return (
    <EntryHeaderWpapper>
      <Logo
        src={ logo }
        alt="logo"
      />
      { props.children }
    </EntryHeaderWpapper>
  );
};

export default CenterMessage;
