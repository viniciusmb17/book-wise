import logo from '@/assets/logo.png'
import { Binoculars, ChartLineUp, SignIn } from '@phosphor-icons/react'
import {
  Container,
  ItemMenu,
  LoginNav,
  LogoImage,
  MenuContainer,
  NavContainer,
} from './styles'

export function Sidebar() {
  return (
    <Container>
      <NavContainer>
        <LogoImage src={logo} alt="Bookwise logo" />
        <MenuContainer>
          <li>
            <ItemMenu href={''} selected>
              <ChartLineUp />
              Início
            </ItemMenu>
          </li>
          <li>
            <ItemMenu href={''}>
              <Binoculars />
              Explorar
            </ItemMenu>
          </li>
        </MenuContainer>
      </NavContainer>
      <LoginNav href={''}>
        Fazer login
        <SignIn />
      </LoginNav>
    </Container>
  )
}
