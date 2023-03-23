import dynamic from 'next/dynamic';
import { PropsWithChildren } from 'react';

import { Section as LayoutWrapper } from '@/components/sections/Section';

const Header = dynamic(() => import('@/components/common/Header'));

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />

      <LayoutWrapper as="main" type={['LayoutMain', 'LayoutContent']}>
        {children}
      </LayoutWrapper>
    </>
  );
};

export default Layout;
