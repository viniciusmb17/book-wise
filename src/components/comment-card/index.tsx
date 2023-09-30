import { Rating } from '../rating'
import {
  Avatar,
  BookAuthor,
  BookHeader,
  BookInfo,
  BookSummary,
  BookThumb,
  BookTitle,
  CommentDate,
  Container,
  Content,
  Header,
  ProfileName,
  SeeMoreInfo,
  User,
} from './styles'

interface CommentCardProps {
  avatarUrl: string
  profileName: string
  commentDate: string
  ratingNumber: number
  bookThumbUrl: string
  bookThumbAlt: string
}

export function CommentCard({
  avatarUrl,
  profileName,
  commentDate,
  ratingNumber,
  bookThumbUrl,
  bookThumbAlt,
}: CommentCardProps) {
  return (
    <Container>
      <Header>
        <Avatar src={avatarUrl} />

        <User>
          <ProfileName>{profileName}</ProfileName>
          <CommentDate>{commentDate}</CommentDate>
        </User>

        <Rating value={ratingNumber} />
      </Header>
      <Content>
        <BookThumb
          src={bookThumbUrl}
          alt={bookThumbAlt}
          width={108}
          height={152}
        />
        <BookInfo>
          <BookHeader>
            <BookTitle>O Hobbit</BookTitle>
            <BookAuthor>J.R.R. Tolkien</BookAuthor>
          </BookHeader>
          <BookSummary>
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibh...{' '}
            <SeeMoreInfo href={''}>ver mais</SeeMoreInfo>
          </BookSummary>
        </BookInfo>
      </Content>
    </Container>
  )
}
