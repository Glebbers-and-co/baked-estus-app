import { describe, expect, test } from 'vitest';

import { expectToRender } from '@/__tests__/assets/utilities';
import { BulletedList, ListItem, NumberedList } from '@/src/components/ui/kit';

describe('Test lists', () => {
  test('NumberedList', () => {
    expectToRender(
      <NumberedList>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </NumberedList>,
    );
  });

  test('BulletedList', () => {
    expectToRender(
      <BulletedList>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
      </BulletedList>,
    );
  });
});
