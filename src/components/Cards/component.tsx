import { useEffect, useState } from 'react'
import { Card } from '../Card'
import { CardsProps } from './types'

export const Cards = ({ cards }: CardsProps) => {
  const [firstFlipped, setFirstFlipped] = useState<HTMLDivElement | null>(null)
  const [secondFlipped, setSecondFlipped] = useState<HTMLDivElement | null>(
    null
  )
  const [lockedBoard, setLockedBoard] = useState<boolean>(false)

  useEffect(() => {
    console.log(firstFlipped, secondFlipped)

    if (firstFlipped && secondFlipped) {
      if (firstFlipped.dataset.number === secondFlipped.dataset.number) {
        console.log('same')
        resetBoard()
      } else {
        setTimeout(() => {
          unflipCards()
          resetBoard()
        }, 800)
      }
    }
  }, [firstFlipped, secondFlipped])

  const handleCardFlip = (card: HTMLDivElement) => {
    if (lockedBoard) return
    card.classList.add('flipped')
    if (!firstFlipped) {
      setFirstFlipped(card)
      return
    }
    setSecondFlipped(card)
    setLockedBoard(true)
  }

  const unflipCards = () => {
    firstFlipped?.classList.remove('flipped')
    secondFlipped?.classList.remove('flipped')
  }

  const resetBoard = () => {
    setFirstFlipped(null)
    setSecondFlipped(null)
    setLockedBoard(false)
  }

  return cards.map((card, index) => (
    <Card
      key={index}
      id={card.id}
      image={card.image}
      showAnimal={false}
      callback={handleCardFlip}
    />
  ))
}
