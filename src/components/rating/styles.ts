import { styled } from '@/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '$1',
  svg: {
    width: '1rem',
    height: '1rem',
    color: '$purple100',
  },
})
