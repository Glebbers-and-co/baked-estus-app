import cn from 'classnames';
import { type FC } from 'react';

import { AppConstants } from '@/app/app.constants';
import UiContainer from '@/src/components/ui/UiContainer/UiContainer';

import styles from './Footer.module.scss';
import type { FooterProps } from './Footer.props';

const Footer: FC<FooterProps> = () => {
  return (
    <footer
      className={cn(
        styles.appFooter,
        'sticky bottom-0 bg-primary-bg with-shadow',
      )}
    >
      <UiContainer
        className={cn('flex justify-end', styles.container)}
        maxWidth={AppConstants.containersWidths.wide}
      >
        &quot;Глеб Пирожковый магнат&quot;&copy; 40&ndash;90, Глеберборея, права
        сохранены
      </UiContainer>
    </footer>
  );
};

export default Footer;
