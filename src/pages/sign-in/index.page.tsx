import Image from 'next/image'
import { Container, ImageContainer, LoginContainer } from './styles'
import logo from '@/assets/logo.png'

export default function SignIn() {
  return (
    <Container>
      <ImageContainer>
        <Image alt="" src={logo} />
      </ImageContainer>
      <LoginContainer></LoginContainer>
    </Container>
  )
}
