import Document, { Html, Main, NextScript, Head } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <body>
          <Head />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument