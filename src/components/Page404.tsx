import React from 'react';

import CenterMessage from './CenterMessage';

import {
  Page,
  CenterWrapper,
  TextLarge,
} from '../theme/widgets';

const Page404 : React.SFC = () => {
  return (
    <Page outer>
      <CenterWrapper>
        <CenterMessage>
          <TextLarge super>404</TextLarge>
          <TextLarge>Page Not Found!!!</TextLarge>
        </CenterMessage>
      </CenterWrapper>
    </Page>
  );
};

export default Page404;
