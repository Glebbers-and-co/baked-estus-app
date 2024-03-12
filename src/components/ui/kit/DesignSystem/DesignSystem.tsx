import cn from 'classnames';
import { type FC } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import Heading from '@/src/components/ui/kit/Heading/Heading';

import styles from './DesignSystem.module.scss';
import type { DesignSystemProps } from './DesignSystem.props';

/**
 * This component only exists to introduce design system.
 * @constructor
 */
const DesignSystem: FC<DesignSystemProps> = () => {
  return (
    <UiContainer
      maxWidth={'365px'}
      margin={'0px'}
      className={cn('bg-red-400', styles.designSystem)}
    >
      <Heading as={'h1'}>Design-system</Heading>

      <article>
        <Heading as={'h2'}>Paddings</Heading>
      </article>
    </UiContainer>
  );
};

export default DesignSystem;
