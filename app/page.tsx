import cn from 'classnames';
import { type Metadata } from 'next';
import { ReactNode } from 'react';

import ProductCard from '@/src/components/ui/ProductCard/ProductCard';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import { generateStaticMetadata } from '@/src/utils/seo';

import styles from './main-page.module.scss';

export const metadata: Metadata = generateStaticMetadata({});

export default function Home() {
  return (
    <main className={cn(styles.mainPage)}>
      <UiContainer className={cn(styles.container)}>
        {Array.from<ReactNode>({ length: 12 }).fill(
          <ProductCard
            price={500}
            discount={200}
            heading={'Пирожок жесть крутой'}
          />,
        )}
      </UiContainer>
    </main>
  );
}
