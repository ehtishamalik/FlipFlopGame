import { useEffect, useState } from 'react'
import { Card } from '../Card'
import { CardsProps } from './types'

export const Cards = ({ cards, onGameComplete }: CardsProps) => {
  const [firstFlipped, setFirstFlipped] = useState<HTMLDivElement | null>(null)
  const [secondFlipped, setSecondFlipped] = useState<HTMLDivElement | null>(
    null
  )
  const [lockedBoard, setLockedBoard] = useState<boolean>(false)
  const [successFlipped, setSuccessFlipped] = useState<string[]>([])

  const handleCardFlip = (card: HTMLDivElement) => {
    if (lockedBoard) return
    if (!card.dataset.number) return
    if (successFlipped.includes(card.dataset.number)) return
    card.classList.add('flipped')
    if (!firstFlipped) {
      setFirstFlipped(card)
    } else {
      setSecondFlipped(card)
      setLockedBoard(true)
    }
  }

  const resetBoard = () => {
    setFirstFlipped(null)
    setSecondFlipped(null)
    setLockedBoard(false)
  }

  useEffect(() => {
    if (successFlipped.length && successFlipped.length === cards.length / 2) {
      setSuccessFlipped([])
      onGameComplete()
      return
    }
    if (
      firstFlipped &&
      secondFlipped &&
      firstFlipped.dataset.number &&
      secondFlipped.dataset.number
    ) {
      if (firstFlipped.dataset.number === secondFlipped.dataset.number) {
        setSuccessFlipped([...successFlipped, firstFlipped.dataset.number])
        resetBoard()
      } else {
        setTimeout(() => {
          firstFlipped.classList.remove('flipped')
          secondFlipped.classList.remove('flipped')
          resetBoard()
        }, 800)
      }
    }
  }, [
    firstFlipped,
    secondFlipped,
    successFlipped,
    cards.length,
    onGameComplete,
  ])

  return cards.map((card, index) => (
    <Card
      key={index}
      id={card.id}
      image={card.image}
      callback={handleCardFlip}
    />
  ))
}
