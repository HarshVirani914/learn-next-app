import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import Nav from "../src/components/nav";
import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
