import Document, { Html, Head, Main, NextScript } from "next/document";
import type { DocumentContext, DocumentInitialProps } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  public static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  public render(): JSX.Element {
    return (
      <Html>
        <Head />

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
