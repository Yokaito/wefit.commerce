import {
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Product } from '@/sdk/product';
import { toast } from 'react-toastify';

export interface ProductCart extends Product {
  quantity: number;
}

type MinicartContextType = {
  products: ProductCart[];
  functions: {
    addProduct: (product: ProductCart) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    removeProduct: (productId: number) => void;
    clearMinicart: () => void;
    hasProduct: (productId: number) => ProductCart | null;
  };
  auxiliar: {
    totalProducts: number;
  };
  totalizers: {
    total: number;
  };
};

const initialValue: MinicartContextType = {
  products: [],
  functions: {
    addProduct: () => {},
    updateQuantity: () => {},
    removeProduct: () => {},
    clearMinicart: () => {},
    hasProduct: () => null,
  },
  auxiliar: {
    totalProducts: 0,
  },
  totalizers: {
    total: 0,
  },
};

export const MinicartContext = createContext<MinicartContextType>(initialValue);

export const MinicartProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<ProductCart[]>([]);
  const notifySuccess = () => toast.success('Produto adicionado ao carrinho!');
  const notifyRemove = () => toast.success('Produto removido do carrinho!');
  const notifyWarning = () => toast.warning('Limite de 100 produtos atingido!');
  const notifyError = () => toast.error('Ocorreu um erro na aplicação');

  const totalProducts = products.length;
  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
  }, [products]);

  const handleAddProduct = (product: ProductCart) => {
    try {
      const productIndex = products.findIndex((item) => item.id === product.id);

      if (productIndex === -1) {
        notifySuccess();
        setProducts([...products, product]);
      } else {
        const updatedProducts = [...products];
        updatedProducts[productIndex] = {
          ...updatedProducts[productIndex],
          quantity: updatedProducts[productIndex].quantity + product.quantity,
        };

        if (updatedProducts[productIndex].quantity > 100) {
          notifyWarning();
          return;
        }

        setProducts(updatedProducts);
      }
    } catch {
      notifyError();
    }
  };

  const productIsInCart = (productId: number): ProductCart | null => {
    return products.find((item) => item.id === productId) || null;
  };

  const handleRemoveProduct = (productId: number) => {
    try {
      const productIndex = products.findIndex((item) => item.id === productId);

      if (productIndex !== -1) {
        const updatedProducts = [...products];
        updatedProducts.splice(productIndex, 1);

        setProducts(updatedProducts);
      }

      notifyRemove();
    } catch {
      notifyError();
    }
  };

  const handleUpdateQuantity = (productId: number, quantity: number) => {
    const productIndex = products.findIndex((item) => item.id === productId);

    if (productIndex !== -1) {
      const updatedProducts = [...products];
      updatedProducts[productIndex] = {
        ...updatedProducts[productIndex],
        quantity,
      };

      setProducts(updatedProducts);
    }
  };

  const handleClearProducts = () => {
    setProducts([]);
  };

  useEffect(() => {
    const localProducts = localStorage.getItem('wefit:cart');

    if (localProducts) {
      setProducts(JSON.parse(localProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('wefit:cart', JSON.stringify(products));
  }, [products]);

  return (
    <MinicartContext.Provider
      value={{
        products: products,
        functions: {
          addProduct: handleAddProduct,
          updateQuantity: handleUpdateQuantity,
          removeProduct: handleRemoveProduct,
          clearMinicart: handleClearProducts,
          hasProduct: productIsInCart,
        },
        auxiliar: {
          totalProducts: totalProducts,
        },
        totalizers: {
          total: total,
        },
      }}
    >
      {children}
    </MinicartContext.Provider>
  );
};
