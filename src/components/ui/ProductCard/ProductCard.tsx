import { type VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Image from 'next/image';

import mockImage from '@/public/images/yIPPZKE.jpeg';
import Heading from '@/src/components/ui/kit/Heading/Heading';

import styles from './ProductCard.module.scss';
import type { ProductCardProps } from './ProductCard.props';

const Price: VariableFC<
  'section',
  Pick<ProductCardProps, 'price' | 'discount'>,
  'children'
> = ({ price, discount = 0, className, ...props }) => {
  const totalPrice = price;
  const priceWithDiscount = price - discount;

  return (
    <section className={cn(styles.price, className)} {...props}>
      {discount <= 0 ? (
        <>
          <Heading as={'h3'}>{totalPrice} ₽</Heading>
        </>
      ) : (
        <>
          <Heading as={'h3'}>{priceWithDiscount} ₽</Heading>

          <aside className={cn(styles.discountlessPrice)}>{totalPrice} ₽</aside>
        </>
      )}
    </section>
  );
};

const ProductCard: VariableFC<'article', ProductCardProps, 'children'> = ({
  className,
  price,
  discount,
  heading,
  ...props
}) => {
  return (
    <article className={cn(styles.card, className)} {...props}>
      <header>
        <Image
          src={mockImage}
          alt={'Mock image'}
          className={cn(styles.preview)}
        />

        <Price price={price} discount={discount} />
      </header>

      {heading && <p>{heading}</p>}
    </article>
  );
};

export default ProductCard;
