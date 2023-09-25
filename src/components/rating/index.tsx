import { Star } from '@phosphor-icons/react'
import { Container } from './styles'

const RATING_MOCKUP = [1, 2, 3, 4, 5]

interface RatingProps {
  value: number
}

export function Rating({ value }: RatingProps) {
  return (
    <Container>
      {RATING_MOCKUP.map((item, idx) => {
        const fill = idx < value

        return <Star key={item} weight={fill ? 'fill' : 'regular'} />
      })}
    </Container>
  )
}
