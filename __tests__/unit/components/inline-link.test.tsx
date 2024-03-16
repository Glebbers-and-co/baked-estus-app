import { describe, expect, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import { InlineLink } from '@/src/components/ui/kit';

describe('InlineLink test', () => {
  test('It renders', () => {
    expectToRender(<InlineLink href={'/'}>This is a inline link.</InlineLink>);
  });
});
