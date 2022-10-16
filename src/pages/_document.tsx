import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Roboto:wght@300;400;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <div id="mouseContainer" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
