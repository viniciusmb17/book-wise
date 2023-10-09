import { styled } from '@/styles/stitches.config'
import Link from 'next/link'

export const Container = styled('section', {
  marginTop: '9.125rem',

  display: 'flex',
  width: '20.25rem',
  height: '37.625rem',
  flexDirection: 'column',
  alignItems: 'flex-start',
  rowGap: '$4',

  alignSelf: 'stretch',
})

export const Header = styled('header', {
  display: 'flex',
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

export const Title = styled('span', {
  fontSize: '$sm',
  color: '$gray100',
  lineHeight: '$base',
})

export const SeeMore = styled(Link, {
  all: 'unset',
  cursor: 'pointer',
  fontSize: '$sm',
  fontWeight: '$bold',
  color: '$purple100',

  display: 'flex',
  flexDirection: 'row',
  gap: '$2',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ListBookCards = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
  alignSelf: 'stretch',
})
