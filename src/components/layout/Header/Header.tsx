import cn from 'classnames';
import { type FC } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import type { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = () => {
  return (
    <header className={cn('sticky top-0 bg-primary-bg')}>
      <UiContainer>Header</UiContainer>
    </header>
  );
};

export default Header;
