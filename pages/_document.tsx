import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
            <div id='overlay'></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
