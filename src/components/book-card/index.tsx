import { Rating } from '../rating'
import {
  BookAuthor,
  BookHeader,
  BookThumb,
  BookTitle,
  Container,
  Content,
} from './styles'

interface BookCardProps {
  bookTitle: string
  bookAuthor: string
  bookThumbUrl: string
  bookThumbAlt: string
  ratingNumber: number
}

export function BookCard({
  bookTitle,
  bookAuthor,
  bookThumbUrl,
  bookThumbAlt,
  ratingNumber,
}: BookCardProps) {
  return (
    <Container>
      <BookThumb src={bookThumbUrl} alt={bookThumbAlt} width={64} height={94} />
      <Content>
        <BookHeader>
          <BookTitle>{bookTitle}</BookTitle>
          <BookAuthor>{bookAuthor}</BookAuthor>
        </BookHeader>
        <Rating value={ratingNumber} />
      </Content>
    </Container>
  )
}
