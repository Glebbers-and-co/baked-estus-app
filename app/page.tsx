import cn from 'classnames';
import { type Metadata } from 'next';

import ProductCard from '@/src/components/ui/ProductCard/ProductCard';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import { generateStaticMetadata } from '@/src/utils/seo';

import styles from './main-page.module.scss';

export const metadata: Metadata = generateStaticMetadata({});

export default function Home() {
  return (
    <main className={cn(styles.mainPage)}>
      <UiContainer className={cn(styles.container)}>
        <ProductCard price={100} heading={'Sus'} />
        <ProductCard price={152} discount={50} />
      </UiContainer>
    </main>
  );
}
