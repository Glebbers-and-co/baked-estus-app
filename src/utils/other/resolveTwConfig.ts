import resolveConfig from 'tailwindcss/resolveConfig';

import twConfig from '@/tailwind.config';

/**
 * This function allows you to resolve Tailwind config inside your
 * TS code.
 *
 * @example
 * const tailwind = resolveTwConfig();
 * console.log(tailwind.theme.colors.red['500']);
 */
export const resolveTwConfig = () => {
  return resolveConfig(twConfig);
};
