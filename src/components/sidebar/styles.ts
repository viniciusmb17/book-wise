import { styled } from '@/styles/stitches.config'
import sidebarBg from '@/assets/sidebar-bg.svg'
import Image from 'next/image'
import Link from 'next/link'

export const Container = styled('aside', {
  width: '14.5rem',
  height: 'calc(100vh - 1rem - 1.25rem)',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',

  borderRadius: '12px',
  marginLeft: '$5',
  marginBottom: '$4',
  marginTop: '$5',

  paddingTop: '$10',
  paddingBottom: '$6',

  backgroundImage: `url(${sidebarBg.src})`,
})

export const NavContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem',
})
export const MenuContainer = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  li: {
    all: 'unset',
  },
})

export const ItemMenu = styled(Link, {
  variants: {
    selected: {
      true: {
        color: '$gray100',
        paddingLeft: 0,

        '&::before': {
          position: 'relative',
          left: '-0.375rem',
          content: '',
          width: '.25rem',
          height: '1.5rem',
          background: '$gradient-vertical',
        },
      },
    },
  },

  all: 'unset',
  display: 'flex',
  alignItems: 'normal',

  gap: '$3',
  paddingBlock: '$2',
  paddingLeft: '$4',

  cursor: 'pointer',

  color: '$gray400',
  fontSize: '$md',
  lineHeight: '$base',

  '&:hover': {
    color: '$gray100',
  },

  svg: {
    width: '1.5rem',
    height: '1.5rem',
  },
})

export const LogoImage = styled(Image, {
  width: '8rem',
  height: '2rem',
})

export const LoginNav = styled(Link, {
  all: 'unset',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  gap: '$3',
  padding: '$1',

  cursor: 'pointer',

  color: '$gray200',
  fontWeight: '$bold',
  lineHeight: '$base',

  svg: {
    width: '1.25rem',
    height: '1.25rem',
    color: '$green100',
  },
})
