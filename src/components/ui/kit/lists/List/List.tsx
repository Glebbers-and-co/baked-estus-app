import { type VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import styles from './List.module.scss';
import type { ListProps } from './List.props';

export const NumberedList: VariableFC<'ol', ListProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <ol className={cn(styles.list, className)} {...props}>
      {children}
    </ol>
  );
};

export const BulletedList: VariableFC<'ul', ListProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <ul className={cn(styles.list, className)} {...props}>
      {children}
    </ul>
  );
};
