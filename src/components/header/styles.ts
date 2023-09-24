import { styled } from '@/styles/stitches.config'
import { CaretLeft } from '@phosphor-icons/react'

export const Container = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$3',
})

export const IconContainer = styled('div', {
  width: '2rem',
  height: '2rem',
  color: '$green100',
})

export const Title = styled('h1', {
  fontSize: '$2xl',
  fontWeight: '$bold',
  lineHeight: '$short',
})

export const BackButton = styled('button', {
  all: 'unset',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3',
  fontSize: '$md',
  fontWeight: '$bold',
  lineHeight: '$base',

  cursor: 'pointer',
})

export const BackIcon = styled(CaretLeft, {
  width: '1.25rem',
  height: '1.25rem',
  color: '$gray200',
})
