import { type VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { AppConstants } from '@/app/app.constants';
import logoImg from '@/public/images/image 10.png';
import Heading from '@/src/components/ui/kit/Heading/Heading';

import styles from './Logo.module.scss';
import type { LogoProps } from './Logo.props';

const Logo: VariableFC<typeof Link, LogoProps, 'href' | 'children'> = ({
  className,
  ...props
}) => {
  return (
    <Link
      href={'/'}
      className={cn('flex items-center', styles.logo, className)}
      {...props}
    >
      <Image
        src={logoImg}
        alt={'Logotype'}
        className={cn('size-[32px]')}
        width={31}
        height={33}
      />

      <Heading as={'h4'}>{AppConstants.appName}</Heading>
    </Link>
  );
};

export default Logo;
