import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { Container } from '@src/components/shared/container';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t-color mt-4 border-t border-gray200 dark:border-gray500">
      <Container className="py-5 text-center">
        <Link href="/" rel="noopener noreferrer">
          irmantastamasauskas.com
        </Link>
        {` `}
        {new Date().getFullYear()}
      </Container>
    </footer>
  );
};
