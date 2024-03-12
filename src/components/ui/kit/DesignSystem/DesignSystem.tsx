import cn from 'classnames';
import { type FC } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import { BulletedList, ListItem } from '@/src/components/ui/kit';
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
      className={cn('', styles.designSystem)}
    >
      <Heading as={'h1'}>Дизайн-система</Heading>

      <article>
        <Heading as={'h2'}>Отступы</Heading>

        <BulletedList>
          <ListItem>1 уровень: 56рх</ListItem>
          <ListItem>2 уровень: 32рх</ListItem>
          <ListItem>3 уровень: 24рх</ListItem>
          <ListItem>4 уровень: 16рх</ListItem>
          <ListItem>5 уровень: 8рх</ListItem>
        </BulletedList>

        <p>В адаптиве все отступы спускаются на уровень ниже</p>
      </article>

      <article>
        <Heading as={'h2'}>Списки</Heading>

        <div className={cn(styles.subGroup)}>
          <div className={cn(styles.part)}>
            <Heading as={'h3'}>Маркерованный</Heading>

            <BulletedList>
              <ListItem>Маркера контрастного цвета</ListItem>
              <ListItem>10 пикселей диаметр</ListItem>
              <ListItem>Отступ от маркера 8 пикселей</ListItem>
              <ListItem>Отступ от абзаца 16 пикселей</ListItem>
            </BulletedList>
          </div>
        </div>
      </article>
    </UiContainer>
  );
};

export default DesignSystem;
