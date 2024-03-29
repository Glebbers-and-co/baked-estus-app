import cn from 'classnames';
import type { Metadata } from 'next';
import { type ReactNode } from 'react';

import CoreLayout from '@/src/components/layout/CoreLayout/CoreLayout';
import Providers from '@/src/components/layout/Providers/Providers';
import { useEnv } from '@/src/hooks/use-env';
import { generateStaticMetadata } from '@/src/utils/seo';

import { AppConstants } from './app.constants';
import './design-system.scss';
import './globals.scss';
import styles from './layout.module.scss';

export async function generateMetadata(): Promise<Metadata> {
  const env = useEnv();

  return generateStaticMetadata({
    title: {
      template: `%s | ${AppConstants.appName}`,
      default: AppConstants.appName,
    },
    description: 'Generated by create next app',
    appleWebApp: {
      title: AppConstants.appName,
      capable: false,
    },
    alternates: {
      canonical: env.getOrThrow('CANONICAL_URL'),
      languages: {
        // ru: env.getOrThrow('CANONICAL_URL'),

        // Should be changed to another one, if i18n has been implemented
        'x-default': env.getOrThrow('CANONICAL_URL'),
      },
    },
  });
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ru'>
      <head>
        <link
          href='https://fonts.cdnfonts.com/css/futura-pt'
          rel='stylesheet'
        />
      </head>

      <body
        className={cn('flex flex-col [&>main]:flex-grow', styles.layout)}
        style={{
          minHeight: '100dvh',
        }}
      >
        <Providers>
          <CoreLayout>{children}</CoreLayout>
        </Providers>
      </body>
    </html>
  );
}
