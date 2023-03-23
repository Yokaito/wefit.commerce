import OrderPlaced from '@/components/OrderPlaced';
import { useMiniCart } from '@/sdk/minicart';
import Head from 'next/head';
import { useEffect } from 'react';

export const Order = () => {
  const {
    functions: { clearMinicart },
  } = useMiniCart();

  useEffect(() => {
    clearMinicart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Head>
        <title>WeFit | OrderPlaced</title>
      </Head>
      <OrderPlaced />
    </>
  );
};

export default Order;
