import { type VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import { useUniqueId } from '@/src/hooks/useUniqueId';

import styles from './Checkbox.module.scss';
import { type CheckboxProps } from './Checkbox.props';

const Checkbox: VariableFC<
  'input',
  CheckboxProps & { children?: string },
  'type' | 'children'
> = ({ className, children, id, ...props }) => {
  const uuid = id || useUniqueId(gen => `checkbox-${gen}`);

  return (
    <div className={cn('flex select-none', className)}>
      <input
        type={'checkbox'}
        id={uuid}
        className={cn('inline-block w-max', styles.checkboxMarker)}
        {...props}
      />

      {children && <label htmlFor={uuid}>{children}</label>}
    </div>
  );
};

export default Checkbox;
