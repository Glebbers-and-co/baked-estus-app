import { type VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Link from 'next/link';

import type { InlineLinkProps } from './InlineLink.props';

/**
 * Represents link embedded to text.
 * @param className
 * @param children
 * @param props
 * @constructor
 */
const InlineLink: VariableFC<typeof Link, InlineLinkProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Link className={cn('underline', className)} {...props}>
      {children}
    </Link>
  );
};

export default InlineLink;
