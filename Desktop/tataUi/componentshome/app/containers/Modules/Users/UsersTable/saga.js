// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing
import { call, put, take, select } from '@redux-saga/core/effects';
import request from 'utils/request';
import {
  LOAD_USERS,
  FILTER_USERS,
  BASE_URL,
  SET_USERS,
  SET_FILTERED_USERS,
} from './constants';
import { makeFilterSelectorUsersList } from './selectors';

function* handleLoadUsers() {
  const usersList = yield call(request, `${BASE_URL}/users`);
  yield put({ type: SET_USERS, users: usersList.result });
}
function* handleFilterUsers() {
  const filteredUsersList = yield select(makeFilterSelectorUsersList);
  yield put({ type: SET_FILTERED_USERS, filteredUsersList });
}

export default function* saga() {
  while (true) {
    const action = yield take('*');
    if (action.type === LOAD_USERS) {
      yield call(handleLoadUsers);
    }
    if (action.type === FILTER_USERS) {
      yield call(handleFilterUsers);
    }
  }
}
