import EmptyCart from '@/components/EmptyCart';
import MiniCart from '@/components/Minicart';
import { useMiniCart } from '@/sdk/minicart';
import Head from 'next/head';

export const Minicart = () => {
  const {
    auxiliar: { totalProducts },
  } = useMiniCart();

  const hasProducts = totalProducts > 0;

  return (
    <>
      <Head>
        <title>WeFit | Minicart</title>
      </Head>
      {hasProducts ? <MiniCart /> : <EmptyCart />}
    </>
  );
};

export default Minicart;
