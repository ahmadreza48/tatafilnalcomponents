/**
 *
 * Textbox
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Textbox() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Textbox.propTypes = {};

export default Textbox;
