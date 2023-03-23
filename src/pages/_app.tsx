import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from '@/styles/global/createGlobalStyle';
import theme from '@/styles/theme';
import Layout from '@/components/layout';
import { MinicartProvider } from '@/sdk/minicart/Provider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MinicartProvider>
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <GlobalStyle />
            <ToastContainer
              position="bottom-left"
              autoClose={1500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
            />
          </ThemeProvider>
        </MinicartProvider>
      </QueryClientProvider>
    </>
  );
}
