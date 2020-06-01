/*
 * Textbox Messages
 *
 * This contains all the text for the Textbox component.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.components.Textbox';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the Textbox component!',
  },
});
