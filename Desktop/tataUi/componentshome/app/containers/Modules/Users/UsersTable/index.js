/**
 *
 * UsersTable
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { LOAD_USERS } from './constants';
import {
  makeSelectorUsersList,
  makeFilterSelectorUsersList,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import DataTable from '../../../../components/DataTable';

const key = 'usersTable';
export function UsersTable({ loadUsers, users }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const [isUsersLoaded, setUsersLoaded] = useState(false);

  useEffect(() => {
    if (!isUsersLoaded) {
      loadUsers();
      setUsersLoaded(true);
    }
  });
  const dataConverter = () => {
    const dataGrid = { dataGrid: { data: users } };
    const gridColumn = {
      gridColumn: [
        { field: 'id', title: 'id' },
        { field: 'title', title: 'title' },
      ],
    };
    return Object.assign(dataGrid, gridColumn);
  };

  return (
    <div>
      <FormattedMessage {...messages.header} />
      <DataTable {...dataConverter()} />
    </div>
  );
}

UsersTable.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
  filter: PropTypes.array,
  users: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  users: makeSelectorUsersList,
  filter: makeFilterSelectorUsersList,
});

function mapDispatchToProps(dispatch) {
  return {
    loadUsers: () => {
      dispatch({ type: LOAD_USERS });
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(UsersTable);
