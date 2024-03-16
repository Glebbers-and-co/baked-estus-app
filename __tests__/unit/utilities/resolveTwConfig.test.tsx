import { describe, expect, test } from 'vitest';

import { testObject } from '@/__tests__/assets/utilities';
import { resolveTwConfig } from '@/src/utils/other';

describe('resolveTwConfig func', () => {
  test('It returns', () => {
    testObject(resolveTwConfig());
  });
});
