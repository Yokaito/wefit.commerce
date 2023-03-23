import Head from 'next/head';
import { useQuery } from '@tanstack/react-query';

import { ProductCard, ProductGrid } from '@/components/product';
import { getProducts } from '@/sdk/services/product';
import Loading from '@/components/ui/Loading';

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  return (
    <>
      <Head>
        <title>WeFit | Commerce</title>
        <meta name="description" content="e-commerce movies wefit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? (
        <Loading />
      ) : (
        <ProductGrid>
          {data?.products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      )}
    </>
  );
}
