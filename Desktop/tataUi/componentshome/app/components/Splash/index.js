/**
 *
 * Splash
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Background from './Background';

function Splash() {
  return (
    <Background>
      <FormattedMessage {...messages.header} />
    </Background>
  );
}

Splash.propTypes = {};

export default memo(Splash);
