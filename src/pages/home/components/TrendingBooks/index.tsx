import { CaretRight } from '@phosphor-icons/react'
import { Container, Header, ListBookCards, SeeMore, Title } from './styles'
import { BookCard } from '@/components/book-card'

import hobbitThumb from '@/assets/books/o-hobbit.png'

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
      <ListBookCards>
        <BookCard
          bookTitle="O Hobbit"
          bookAuthor="J.R.R. Tolkien"
          bookThumbUrl={hobbitThumb.src}
          bookThumbAlt="livro O Hobbit"
          ratingNumber={4}
        />
        <BookCard
          bookTitle="O Hobbit"
          bookAuthor="J.R.R. Tolkien"
          bookThumbUrl={hobbitThumb.src}
          bookThumbAlt="livro O Hobbit"
          ratingNumber={4}
        />
        <BookCard
          bookTitle="O Hobbit"
          bookAuthor="J.R.R. Tolkien"
          bookThumbUrl={hobbitThumb.src}
          bookThumbAlt="livro O Hobbit"
          ratingNumber={4}
        />
        <BookCard
          bookTitle="O Hobbit"
          bookAuthor="J.R.R. Tolkien"
          bookThumbUrl={hobbitThumb.src}
          bookThumbAlt="livro O Hobbit"
          ratingNumber={4}
        />
      </ListBookCards>
    </Container>
  )
}
