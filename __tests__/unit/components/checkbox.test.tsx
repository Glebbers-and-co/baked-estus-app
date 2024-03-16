import { describe, expect, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import { Checkbox } from '@/src/components/ui/kit';

describe('Checkbox component', () => {
  test('It renders', () => {
    expectToRender(<Checkbox />);
    expectToRender(<Checkbox>Children</Checkbox>);
  });
});
