import { type VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Link from 'next/link';

import { Bookmarks, Cart, History } from '@/src/components/ui/icons';

import styles from './TopNav.module.scss';
import type { TopNavItemProps, TopNavProps } from './TopNav.props';

const NavItem: VariableFC<typeof Link, TopNavItemProps> = ({
  children,
  className,
  disabled,
  ...props
}) => {
  return (
    <li className={cn(disabled && 'opacity-40 pointer-events-none')}>
      <Link className={cn(styles.navItem, className)} {...props}>
        {children}
      </Link>
    </li>
  );
};

const TopNav: VariableFC<'nav', TopNavProps, 'children'> = ({
  className,
  ...props
}) => {
  return (
    <nav className={cn(styles.topNavbar, className)} {...props}>
      <ul>
        <NavItem href={'/'}>
          <Bookmarks className={cn('size-[1.5em]')} />
          Избранное
        </NavItem>

        <NavItem href={'/'} disabled>
          <History className={cn('size-[1.5em]')} />
          История
        </NavItem>

        <NavItem href={'/'}>
          <Cart className={cn('size-[1.5em]')} />
          Корзина
        </NavItem>
      </ul>
    </nav>
  );
};

export default TopNav;
