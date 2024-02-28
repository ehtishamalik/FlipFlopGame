import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { difficultyLevels } from '../../constants'
import { DifficultySelector } from '../DifficultySelector'
import { getRandomArray } from './constant'
import { CardsArray, DifficultyLevel } from '../../types'
import clsx from 'clsx'
import { Cards } from '../Cards'
import { FlipFlopGameProps } from './types'
import { saveTime } from './helper'

export const FlipFlopGame = ({
  userName,
  onLevelChange,
}: FlipFlopGameProps) => {
  const [gameLevel, setGameLevel] = useState<DifficultyLevel | null>(null)
  const [cards, setCards] = useState<CardsArray>([])

  useEffect(() => {
    if (gameLevel) {
      setCards(getRandomArray(gameLevel))
    }
  }, [gameLevel])

  return (
    <div className='game-container'>
      <DifficultySelector
        levels={difficultyLevels}
        defaultLevel={gameLevel}
        callback={(level: DifficultyLevel) => {
          if (userName) {
            setGameLevel(level)
            onLevelChange?.(level)
          } else {
            toast('Please enter your name')
          }
        }}
      />
      {gameLevel ? (
        <div
          className={clsx('cards-grid', {
            'grid-4': gameLevel === 'easy',
            'grid-6': gameLevel === 'normal',
            'grid-8': gameLevel === 'hard',
            'grid-10': gameLevel === 'expert',
          })}
        >
          <Cards
            cards={cards}
            onGameComplete={() => {
              const timeout = setTimeout(() => {
                toast('Congratulations, You have WON!')
                saveTime(gameLevel, userName!)
                setGameLevel(null)
                onLevelChange?.(null)
                clearTimeout(timeout)
              }, 1000)
            }}
          />
        </div>
      ) : (
        <>
          <h2>Welcome to Animal Memory!</h2>
          <p>
            Ready to test your memory? Enter your name and start matching
            adorable animal pairs.
            <br /> The clock is ticking, so have fun!
          </p>
        </>
      )}
    </div>
  )
}
