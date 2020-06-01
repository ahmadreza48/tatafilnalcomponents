/*
 * Splash Messages
 *
 * This contains all the text for the Splash component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Splash';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Splash component!',
  },
});
