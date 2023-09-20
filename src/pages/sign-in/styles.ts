import { styled } from '@/styles/stitches.config'
import loginImageBg from '@/assets/login-image-bg.png'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',

  justifyContent: 'space-around',

  alignItems: 'center',

  maxWidth: '90rem',
  height: '100vh',
  padding: '1.25rem',

  gap: '$8',
})

export const ImageContainer = styled('aside', {
  minWidth: '37.375rem',
  maxWidth: '50%',
  height: 'calc(100vh - 40px)',

  flexGrow: 1,
  flexShrink: 0,

  backgroundImage: `url(${loginImageBg.src})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',

  borderRadius: '10px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const LoginContainer = styled('main', {
  width: '23.25rem',

  display: 'flex',
  flexDirection: 'column',

  alignItems: 'flex-start',
  gap: '2.5rem',

  paddingRight: '$8',
})

export const TextContainer = styled('header', {
  '> h1': {
    color: '$gray100',
    fontSize: '$2xl',
    fontWeight: '$bold',
    lineHeight: '$short',
  },
  '> span': {
    color: '$gray200',
    fontSize: '$md',
    fontWeight: '$regular',
    lineHeight: '$base',
  },
})

export const CardsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})
