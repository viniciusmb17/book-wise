import { styled } from '@/styles/stitches.config'
import Image from 'next/image'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  padding: '1rem 1.25rem',
  gap: '$5',
  alignSelf: 'stretch',

  borderRadius: '8px',
  background: '$gray700',
})

export const Content = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '20px',
  alignSelf: 'stretch',
})

export const BookHeader = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
})

export const BookThumb = styled(Image, {
  borderRadius: '$sm',
  maxWidth: '4rem',
  alignSelf: 'stretch',
})

export const BookTitle = styled('span', {
  color: '$gray100',
  fontSize: '$md',
  fontWeight: '$bold',
  lineHeight: '$short',
})

export const BookAuthor = styled('span', {
  color: '$gray400',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
})
