import cn from 'classnames';
import { type FC } from 'react';

import { AppConstants } from '@/app/app.constants';
import Logo from '@/src/components/ui/Logo/Logo';
import TopNav from '@/src/components/ui/TopNav/TopNav';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './Header.module.scss';
import type { HeaderProps } from './Header.props';

const Header: FC<HeaderProps> = () => {
  return (
    <header
      className={cn('sticky top-0 bg-primary-bg with-shadow', styles.appHeader)}
    >
      <UiContainer
        maxWidth={AppConstants.containersWidths.wide}
        className={cn(styles.container)}
        as={'div'}
      >
        <Logo />

        <section className={cn('flex-grow bg-red-400/25 flex-center h-[37px]')}>
          Здесь будет поиск
        </section>

        <TopNav />
      </UiContainer>
    </header>
  );
};

export default Header;
