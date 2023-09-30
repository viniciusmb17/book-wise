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

export const CommentCards = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',

  maxHeight: 'calc(100vh - 186px)',
  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    width: '4px',
  },

  '&:hover': {
    '&::-webkit-scrollbar-track': {
      background: '$gray600',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '$gray500',
    },
  },

  paddingBottom: '16px',
})
