import { styled } from '@/styles/stitches.config'

export const Container = styled('section', {
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
