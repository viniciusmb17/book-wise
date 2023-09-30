import { styled } from '@/styles/stitches.config'
import Image from 'next/image'
import Link from 'next/link'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '1.5rem',
  gap: '$8',
  alignSelf: 'stretch',

  borderRadius: '8px',
  background: '$gray700',
})

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'row',
  alignSelf: 'stretch',
  gap: '$4',
})

export const User = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  flex: '1 0 0',
})

export const ProfileName = styled('span', {
  fontSize: '$md',
  lineHeight: '$base',
  color: '$gray100',
})
export const CommentDate = styled('span', {
  fontSize: '$sm',
  lineHeight: '$base',
  color: '$gray400',
})

export const Avatar = styled('img', {
  width: '2.5rem',
  height: '2.5rem',

  padding: '.0625rem',
  backgroundImage: 'linear-gradient(180deg, #7FD1CC 0%, #9694F5 100%)',
  borderRadius: '999px',
})

export const Content = styled('article', {
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  alignSelf: 'stretch',
})

export const BookThumb = styled(Image, {
  borderRadius: '$sm',
  maxWidth: '6.75rem',
})

export const BookHeader = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  alignSelf: 'stretch',
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$5',
  flex: '1 0 0',
})

export const BookTitle = styled('span', {
  color: '$gray100',
  fontSize: '$md',
  fontWeight: '$bold',
  lineHeight: '$short',
})

export const BookAuthor = styled('span', {
  color: '$gray400',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
})

export const BookSummary = styled('span', {
  color: '$gray300',
  fontSize: '$sm',
  lineHeight: '$base',
})

export const SeeMoreInfo = styled(Link, {
  all: 'unset',
  cursor: 'pointer',
  fontWeight: '$bold',
  color: '$purple100',
})
