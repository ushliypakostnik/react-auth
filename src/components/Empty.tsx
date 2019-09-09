import * as React from 'react';

import CenterMessage from './CenterMessage';
import Loading from './elements/Loading';

import {
  Page,
  CenterWrapper,
  EntryHeaderWpapper
} from '../theme/widgets';

const Empty : React.SFC = () => {
  return (
    <Page outer>
      <CenterWrapper>
        <EntryHeaderWpapper>
          <Loading />
        </EntryHeaderWpapper>
      </CenterWrapper>
     </Page>
    );
};

export default Empty;
