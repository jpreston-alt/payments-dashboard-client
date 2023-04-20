import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/theme";
import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>{pageProps.title}</title>
        <meta name="description" content="Payments Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
