import { GeistProvider, CssBaseline } from "@geist-ui/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
}
export default MyApp;
