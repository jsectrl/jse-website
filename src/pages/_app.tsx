import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Play } from "next/font/google";

import { Yantramanav } from "next/font/google";

const yantramanav = Yantramanav({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={yantramanav.className}>
      <Component {...pageProps} />;
    </main>
  );
}
