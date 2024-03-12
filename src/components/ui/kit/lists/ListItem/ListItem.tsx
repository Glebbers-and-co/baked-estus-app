import { type VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import type { ListItemProps } from './ListItem.props';

const ListItem: VariableFC<'li', ListItemProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <li className={cn(className)} {...props}>
      {children}
    </li>
  );
};

export default ListItem;
