import { type VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Link from 'next/link';

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
        <NavItem href={'/'}>Fav</NavItem>

        <NavItem href={'/'} disabled>
          History
        </NavItem>

        <NavItem href={'/'}>Cart</NavItem>
      </ul>
    </nav>
  );
};

export default TopNav;