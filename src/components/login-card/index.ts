import { styled } from '@stitches/react'

export const LoginCard = styled('button', {
  all: 'unset',

  display: 'flex',

  alignItems: 'center',

  width: '20.3rem',
  paddingInline: '$6',
  paddingBlock: '$5',

  backgroundColor: '$gray600',

  gap: '$5',

  borderRadius: '$md',

  svg: {
    width: '2rem',
    height: '2rem',
  },

  color: '$gray200',
  fontSize: '$lg',
  fontWeight: '$bold',
  lineHeight: '$base',

  cursor: 'pointer',
})
