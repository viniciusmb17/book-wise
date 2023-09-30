import { CommentCard } from '@/components/comment-card'
import { CommentCards, Container, Title } from './styles'
import avatar1 from '@/assets/avatars/avatar-1.png'
import hobbitThumb from '@/assets/books/o-hobbit.png'

export function BookList() {
  return (
    <Container>
      <Title>Avaliações mais recentes</Title>
      <CommentCards>
        <CommentCard
          avatarUrl={avatar1.src}
          commentDate="Hoje"
          profileName="Jaxson Dias"
          ratingNumber={4}
          bookThumbUrl={hobbitThumb.src}
          bookThumbAlt="Capa do livro"
        />
        <CommentCard
          avatarUrl={avatar1.src}
          commentDate="Hoje"
          profileName="Jaxson Dias"
          ratingNumber={4}
          bookThumbUrl={hobbitThumb.src}
          bookThumbAlt="Capa do livro"
        />
        <CommentCard
          avatarUrl={avatar1.src}
          commentDate="Hoje"
          profileName="Jaxson Dias"
          ratingNumber={4}
          bookThumbUrl={hobbitThumb.src}
          bookThumbAlt="Capa do livro"
        />
      </CommentCards>
    </Container>
  )
}
