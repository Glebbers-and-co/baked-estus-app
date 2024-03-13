import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { type FC } from 'react';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import { BulletedList, ListItem, NumberedList } from '@/src/components/ui/kit';
import Heading from '@/src/components/ui/kit/Heading/Heading';

import styles from './DesignSystem.module.scss';
import type { DesignSystemProps } from './DesignSystem.props';

const Subgroup: VariableFC<'div'> = ({ className, children, ...props }) => {
  return (
    <div className={cn(styles.subGroup, className)} {...props}>
      {children}
    </div>
  );
};

const Part: VariableFC<'div', { heading?: string }> = ({
  className,
  children,
  heading,
  ...props
}) => {
  return (
    <div className={cn(styles.part, className)} {...props}>
      {heading && <Heading as={'h3'}>{heading}</Heading>}

      {children}
    </div>
  );
};

const Article: VariableFC<'div', { heading?: string }> = ({
  className,
  children,
  heading,
  ...props
}) => {
  return (
    <article className={cn(className)} {...props}>
      {heading && <Heading as={'h2'}>{heading}</Heading>}

      {children}
    </article>
  );
};

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

      <Article heading={'Отступы'}>
        <BulletedList>
          <ListItem>1 уровень: 56рх</ListItem>
          <ListItem>2 уровень: 32рх</ListItem>
          <ListItem>3 уровень: 24рх</ListItem>
          <ListItem>4 уровень: 16рх</ListItem>
          <ListItem>5 уровень: 8рх</ListItem>
        </BulletedList>

        <p>В адаптиве все отступы спускаются на уровень ниже</p>
      </Article>

      <Article heading={'Списки'}>
        <Subgroup>
          <Part heading={'Маркерованный'}>
            <BulletedList>
              <ListItem>Маркера контрастного цвета</ListItem>
              <ListItem>10 пикселей диаметр</ListItem>
              <ListItem>Отступ от маркера 8 пикселей</ListItem>
              <ListItem>Отступ от абзаца 16 пикселей</ListItem>
            </BulletedList>
          </Part>

          <Part heading={'Нумерованный'}>
            <NumberedList>
              <ListItem>Номер вынесен</ListItem>
              <ListItem>Номер обернут блоком 20 рх</ListItem>
              <ListItem>Кегль номера такой же, как у текста</ListItem>
              <ListItem>Начертание номера жирное</ListItem>
              <ListItem>Начертание номера жирное</ListItem>
              <ListItem>Отступ от номера 8 пикселей</ListItem>
              <ListItem>Отступ от абзаца 16 пикселей</ListItem>
            </NumberedList>
          </Part>
        </Subgroup>
      </Article>

      <Article heading={'Компоненты'}>
        <Subgroup>
          <Part heading={'Чекбокс'}>Сас</Part>
        </Subgroup>
      </Article>
    </UiContainer>
  );
};

export default DesignSystem;
