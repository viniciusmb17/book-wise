import { Header } from '@/components/header'
import { Main } from '@/components/main'
import { SideSection } from '@/components/side-section'
import { Sidebar } from '@/components/sidebar'
import { ChartLineUp } from '@phosphor-icons/react/dist/ssr'
import Head from 'next/head'
import { BookList } from './components/BookList'
import { Container } from './styles'
import { TrendingBooks } from './components/TrendingBooks'

export default function Home() {
  return (
    <>
      <Head>
        <title>Book Wise</title>
        <meta name="description" content="Book Wise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Sidebar />
        <Main>
          <Header title="Início" icon={<ChartLineUp />} />
          <BookList />
        </Main>
        <SideSection>
          <TrendingBooks />
        </SideSection>
      </Container>
    </>
  )
}
