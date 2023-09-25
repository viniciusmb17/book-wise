import { CommentCard } from '@/components/comment-card'
import { CommentCards, Container, Title } from './styles'
import avatar1 from '@/assets/avatars/avatar-1.png'
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
        />
      </CommentCards>
    </Container>
  )
}
