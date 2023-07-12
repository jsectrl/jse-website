import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Play } from "next/font/google";

const play = Play({ weight: "400", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={play.className}>
      <Component {...pageProps} />
    </main>
  );
}
