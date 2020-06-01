/**
 *
 * UserRegistration
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectUserRegistration from './selectors';
import Grid from '../../../../components/Grid';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function UserRegistration() {
  useInjectReducer({ key: 'userRegistration', reducer });
  useInjectSaga({ key: 'userRegistration', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <Grid container xs>
        <Grid container xs={2}>
          <div>hello</div>
        </Grid>
        <Grid container xs={2}>
          <div>hello</div>
        </Grid>
      </Grid>
    </div>
  );
}

UserRegistration.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  userRegistration: makeSelectUserRegistration(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(UserRegistration);
