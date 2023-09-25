import { styled } from '@/styles/stitches.config'

export const Container = styled('section', {
  width: '38rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const Title = styled('span', {
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
  color: '$gray100',
})

export const CommentCards = styled('div', {})
