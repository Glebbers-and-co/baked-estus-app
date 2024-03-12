import cn from 'classnames';
import { type FC, type HTMLAttributes } from 'react';

import styles from './Heading.module.scss';
import { type HeadingProps } from './Heading.props';

export const Heading: FC<HTMLAttributes<HTMLHeadingElement> & HeadingProps> = ({
  className,
  children,
  as: Element,
  ...props
}) => {
  return (
    <Element className={cn(styles.heading, className)} {...props}>
      {children}
    </Element>
  );
};

export default Heading;
