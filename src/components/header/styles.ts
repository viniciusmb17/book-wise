import { styled } from '@/styles/stitches.config'

export const Container = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$3',
})

export const IconContainer = styled('div', {
  variants: {
    variant: {
      primary: {
        width: '2rem',
        height: '2rem',
        color: '$green100',
      },
      secondary: {
        width: '1.25rem',
        height: '1.25rem',
        color: '$gray200',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
})

export const Title = styled('h1', {
  variants: {
    variant: {
      primary: {
        fontSize: '$2xl',
        fontWeight: '$bold',
        lineHeight: '$short',
      },
      secondary: {
        fontSize: '$md',
        fontWeight: '$bold',
        lineHeight: '$base',
      },
    },
  },
})
