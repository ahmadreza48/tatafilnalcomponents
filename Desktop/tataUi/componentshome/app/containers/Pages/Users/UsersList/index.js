/**
 *
 * UsersList
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
import makeSelectUsersList from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import UsersTable from '../../../Modules/Users/UsersTable';

export function UsersList() {
  useInjectReducer({ key: 'usersList', reducer });
  useInjectSaga({ key: 'usersList', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <UsersTable />
    </div>
  );
}

UsersList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  usersList: makeSelectUsersList(),
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

export default compose(withConnect)(UsersList);
