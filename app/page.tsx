import cn from 'classnames';
import { type Metadata } from 'next';

import UiContainer from '@/src/components/ui/UiContainer/UiContainer';
import { generateStaticMetadata } from '@/src/utils/seo';

import styles from './main-page.module.scss';

export const metadata: Metadata = generateStaticMetadata({});

export default function Home() {
  return (
    <main className={cn(styles.mainPage)}>
      <UiContainer className={cn(styles.container)}>index page</UiContainer>
    </main>
  );
}
