import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ThemeProvider } from '@material-tailwind/react';
import type { AppProps } from 'next/app';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
