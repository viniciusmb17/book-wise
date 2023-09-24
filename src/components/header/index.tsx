import { ReactNode } from 'react'
import { BackButton, BackIcon, Container, IconContainer, Title } from './styles'

interface HeaderProps {
  title: string
  icon: ReactNode
  variant?: 'title' | 'back'
}

export function Header({ title, icon, variant = 'title' }: HeaderProps) {
  if (variant === 'title') {
    return (
      <Container>
        <IconContainer>{icon}</IconContainer>
        <Title>{title}</Title>
      </Container>
    )
  }

  return (
    <Container>
      <BackButton>
        <BackIcon /> Voltar
      </BackButton>
    </Container>
  )
}
