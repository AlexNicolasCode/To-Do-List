import Head from 'next/head'
import { Header } from '../src/components/header/header';
import { Main } from '../src/components/main/main';
import { Footer } from '../src/components/footer/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>To Do List</title>
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
