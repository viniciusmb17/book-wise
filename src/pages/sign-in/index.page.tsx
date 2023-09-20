import githubLogo from '@/assets/icons_github-fill.png'
import logo from '@/assets/logo.png'
import googleLogo from '@/assets/logo_google-icon.png'
import rocketLaunchImg from '@/assets/rocket-launch.png'

import { LoginCard } from '@/components/login-card'
import Image from 'next/image'
import {
  CardsContainer,
  Container,
  ImageContainer,
  LoginContainer,
  TextContainer,
} from './styles'

export default function SignIn() {
  return (
    <Container>
      <ImageContainer>
        <Image alt="" src={logo} />
      </ImageContainer>
      <LoginContainer>
        <TextContainer>
          <h1>Boas vindas!</h1>
          <span>Faça seu login ou acesse como visitante.</span>
        </TextContainer>
        <CardsContainer>
          <LoginCard>
            <Image src={googleLogo} alt="google logo" />
            <span>Entrar com Google</span>
          </LoginCard>
          <LoginCard>
            <Image src={githubLogo} alt="github logo" />
            <span>Entrar com Github</span>
          </LoginCard>
          <LoginCard>
            <Image src={rocketLaunchImg} alt="visitantes logo" />
            <span>Entrar com Google</span>
          </LoginCard>
        </CardsContainer>
      </LoginContainer>
    </Container>
  )
}
