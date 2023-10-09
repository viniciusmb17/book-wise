import { CaretRight } from '@phosphor-icons/react'
import { Container, Header, SeeMore, Title } from './styles'

export function TrendingBooks() {
  return (
    <Container>
      <Header>
        <Title>Livros populares</Title>
        <SeeMore href={''}>
          <span>Ver todos</span>
          <CaretRight size={16} />
        </SeeMore>
      </Header>
    </Container>
  )
}
