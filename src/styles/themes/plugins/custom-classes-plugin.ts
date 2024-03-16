import plugin from 'tailwindcss/plugin';

import { cssPropertiesToTw } from './api';

/**
 * Add custom classes and utilities to tailwind.
 * @constructor
 */
export const CustomClassesPlugin = () => {
  return plugin(({ addComponents }) => {
    addComponents({
      '.flex-center': cssPropertiesToTw({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }),

      '.with-shadow': cssPropertiesToTw({
        filter: 'drop-shadow(0px 0px 24px rgb(0 0 0 / .24))',
      }),
    });
  });
};
