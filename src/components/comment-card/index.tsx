import { Rating } from '../rating'
import {
  Avatar,
  CommentDate,
  Container,
  Content,
  Header,
  ProfileName,
  User,
} from './styles'

interface CommentCardProps {
  avatarUrl: string
  profileName: string
  commentDate: string
  ratingNumber: number
}

export function CommentCard({
  avatarUrl,
  profileName,
  commentDate,
  ratingNumber,
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
      <Content></Content>
    </Container>
  )
}
