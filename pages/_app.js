// Below CSS file is global and will affect the entire code

import "../styles/globals.css";
import PageTemplate from "../components/template/PageTemplate";
import { ContextProvider } from "../context/ContextProvider";

// Next.js has components for many HTML elements. Make sure to check their documentation before doing anything major

import Head from "next/head";
import Script from "next/script";
import RouteGuard from "../components/template/PageGuard";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </Head>
      {/* Import Bootstrap to use within code. (NOTE: we use className NOT class) */}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      {/*
          Below is where all the files in the pages folder will render.
          So we wrap this in whatever code we would want globally in the code (Example: Header, Footer, Navigation, Context)
        */}
      <ContextProvider>
        <PageTemplate>
          <RouteGuard pageProps={pageProps}>
            <Component {...pageProps} />
          </RouteGuard>
        </PageTemplate>
      </ContextProvider>
    </>
  );
}

export default App;
