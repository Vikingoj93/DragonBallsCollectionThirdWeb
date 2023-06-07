import { ThirdwebProvider } from "@thirdweb-dev/react";
import "../styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer"

const activeChain = "binance-testnet";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThirdwebProvider>
  );
}

export default MyApp;
