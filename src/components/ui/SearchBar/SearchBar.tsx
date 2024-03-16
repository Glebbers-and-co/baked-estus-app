import { type VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import { Find, Sliders } from '@/src/components/ui/icons';

import styles from './SearchBar.module.scss';
import type { SearchBarProps } from './SearchBar.props';

const ControlButton: VariableFC<'button', { withSeparator?: boolean }> = ({
  className,
  children,
  withSeparator = false,
  ...props
}) => {
  return (
    <button
      className={cn(
        styles.control,
        withSeparator && styles.withSeparator,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const SearchBar: VariableFC<'section', SearchBarProps, 'children'> = ({
  className,
  ...props
}) => {
  return (
    <section className={cn('', styles.searchBar, className)} {...props}>
      <input
        className={cn(styles.search)}
        placeholder={'Найти пирожок своей мечты'}
      />

      <ControlButton>
        <Sliders className={cn('size-[16px]')} />
      </ControlButton>

      <ControlButton withSeparator>
        <Find className={cn('size-[16px]')} />
      </ControlButton>
    </section>
  );
};

export default SearchBar;
