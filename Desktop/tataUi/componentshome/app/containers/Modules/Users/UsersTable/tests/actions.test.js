import { loadUsers } from '../actions';
import { LOAD_USERS } from '../constants';

describe('UsersTable actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: LOAD_USERS,
      };
      expect(loadUsers()).toEqual(expected);
    });
  });
});
