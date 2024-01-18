import { ReactNode } from 'react';

import { Footer } from '../footer';
import { Header } from '../header';

import { Container } from '@src/components/shared/container';

interface LayoutPropsInterface {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutPropsInterface) => {
  return (
    <>
      <Header />
      <Container className="my-auto p-0">{children}</Container>
      <Footer />
    </>
  );
};
