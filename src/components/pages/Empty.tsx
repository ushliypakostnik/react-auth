import * as React from 'react';

import CenterMessage from '../elements/CenterMessage';
import Loading from '../elements/Loading';

import {
  Page,
  CenterWrapper,
  EntryHeaderWpapper,
  PageProps,
} from '../../theme/widgets';

const Empty : React.SFC<PageProps> = () => {
  return (
    <Page empty >
      <CenterWrapper>
        <EntryHeaderWpapper>
          <Loading />
        </EntryHeaderWpapper>
      </CenterWrapper>
     </Page>
    );
};

export default Empty;
