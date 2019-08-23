import React from 'react';

import CenterMessage from './CenterMessage';

import {
  Page,
  CenterFormWrapper,
  TextLarge,
} from '../theme/widgets';

const Page404 : React.SFC = () => {
  return (
    <Page outer>
      <CenterFormWrapper>
        <CenterMessage>
          <TextLarge super>404</TextLarge>
          <TextLarge>Page Not Found!!!</TextLarge>
        </CenterMessage>
      </CenterFormWrapper>
    </Page>
  );
};

export default Page404;
