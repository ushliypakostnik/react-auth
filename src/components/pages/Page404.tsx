import * as React from 'react';

import CenterMessage from '../elements/CenterMessage';

import { useTranslation } from 'react-i18next';

import {
  Page,
  CenterWrapper,
  TextLarge,
} from '../../theme/widgets';

const Page404 : React.SFC = () => {
  const { t, i18n } = useTranslation();

  return (
    <Page outer>
      <CenterWrapper>
        <CenterMessage>
          <TextLarge super>404</TextLarge>
          <TextLarge>{t('page404')}</TextLarge>
        </CenterMessage>
      </CenterWrapper>
    </Page>
  );
};

export default Page404;
