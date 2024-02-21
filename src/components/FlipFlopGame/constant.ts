import { dimensions } from '../../constants'
import { CardsArray, DifficultyLevel } from '../../types'
import { allAnimals } from '../Common/images'

export const getRandomArray = (level: DifficultyLevel | null) => {
  if (!level) return []
  const dimension: number = dimensions[level]
  const numbercards = (dimension * dimension) / 2
  const cards: CardsArray = []
  const alreadyAdded: number[] = []

  if (numbercards === 50) {
    Array.from({ length: numbercards }, (_, index) => {
      cards.push({ image: allAnimals[index], id: index })
      cards.push({ image: allAnimals[index], id: index })
    })
  } else {
    Array.from({ length: numbercards }, (_, index) => {
      const randomNumber = getRandomNumber(alreadyAdded)
      cards.push({ image: allAnimals[randomNumber], id: index })
      cards.push({ image: allAnimals[randomNumber], id: index })
    })
  }

  shuffleArray(cards)

  return cards
}

const getRandomNumber = (array: number[]) => {
  let randomNumber
  do {
    randomNumber = Math.floor(Math.random() * 50)
  } while (array.includes(randomNumber))
  array.push(randomNumber)
  return randomNumber
}

const shuffleArray = (array: CardsArray) => {
  let newPos, tempObj
  const arrayLength = array.length
  for (let index = arrayLength - 1; index > 0; index--) {
    newPos = Math.floor(Math.random() * (index + 1))
    tempObj = array[index]
    array[index] = array[newPos]
    array[newPos] = tempObj
  }
}
