import { useTranslation } from 'next-i18next';
import NextImage from 'next/image';
import Link from 'next/link';

import { LanguageSelector } from '@src/components/features/language-selector';
import { ThemeSelector } from '@src/components/features/theme-selector';
import { Container } from '@src/components/shared/container';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="mb-4 border-b border-gray200 py-5 dark:border-gray500">
      <nav>
        <Container className="flex items-center justify-center gap-4">
          <Link href="/" title={t('header.homepage')}>
            <NextImage
              src="/favicons/favicon-32x32.png"
              alt={t('header.logo')}
              width={32}
              height={32}
            />
          </Link>
          <ThemeSelector />
          <LanguageSelector />
        </Container>
      </nav>
    </header>
  );
};
