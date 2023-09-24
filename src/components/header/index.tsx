import { CaretLeft } from '@phosphor-icons/react'
import { Container, IconContainer, Title } from './styles'
import { ReactNode } from 'react'

interface HeaderProps {
  title: string
  icon: ReactNode
  variant?: 'primary' | 'secondary'
}

export function Header({ title, icon, variant = 'primary' }: HeaderProps) {
  title = variant === 'secondary' ? 'Voltar' : title
  icon = variant === 'secondary' ? <CaretLeft /> : icon

  return (
    <Container>
      <IconContainer variant={variant}>{icon}</IconContainer>
      <Title variant={variant}>{title}</Title>
    </Container>
  )
}
