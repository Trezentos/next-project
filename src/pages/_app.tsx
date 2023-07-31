import { GlobalStyles } from '@/styles/global';
import { Container, Header } from '@/styles/pages/app';
import type { AppProps } from 'next/app'
import Image from 'next/image';
import logoImg from '../assets/logo.svg'




export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Component {...pageProps} />
      <GlobalStyles />
    </Container>
  )
}
