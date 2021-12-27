import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html className="">
        <Head />
        <body className="bg-gray w-[315px] min-h-[200px]">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument