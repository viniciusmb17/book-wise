import { styled } from '@/styles/stitches.config'
import loginImageBg from '@/assets/login-image-bg.png'

export const Container = styled('div', {
  maxWidth: '90rem',
  height: '100vh',
  padding: '1.25rem',
})

export const ImageContainer = styled('aside', {
  width: '37.375rem',
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

export const LoginContainer = styled('main', {})
