import { useEffect, useState } from 'react'
import { difficultyLevels } from '../../constants'
import { DifficultySelector } from '../DifficultySelector'
import { getRandomArray } from './constant'
import { CardsArray, DifficultyLevel } from '../../types'
import clsx from 'clsx'
import { Cards } from '../Cards'
import { FlipFlopGameProps } from './types'
import { Alert } from '../Alert'
import { saveTime } from './helper'

export const FlipFlopGame = ({
  userName,
  onLevelChange,
}: FlipFlopGameProps) => {
  const [gameLevel, setGameLevel] = useState<DifficultyLevel | null>(null)
  const [showAlert, setShowAlert] = useState<string | null>(null)
  const [cards, setCards] = useState<CardsArray>([])

  useEffect(() => {
    if (gameLevel) {
      setCards(getRandomArray(gameLevel))
    }
  }, [gameLevel])

  return (
    <>
      {showAlert && (
        <Alert
          message={showAlert}
          callback={() => {
            setShowAlert(null)
          }}
        />
      )}
      <div className='game-container'>
        <DifficultySelector
          levels={difficultyLevels}
          defaultLevel={gameLevel}
          callback={(level: DifficultyLevel) => {
            if (userName) {
              setGameLevel(level)
              onLevelChange?.(level)
            } else {
              setShowAlert('Please enter your name')
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
                  setShowAlert('Congratulations, You have WON!')
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
            <h2>Welcome to Animal Memory, a memory game for your memory :D</h2>
            <p>
              You might be asking yourself how to play this game. Do not worry,
              that is why this paragraph is here.
            </p>
            <p>
              Please, insert your name so you can start the game. Once you
              start, the timer will start ticking.
            </p>
            <p>
              When you are done, it will stop the time position and the username
              will be printed to the table. ;)
            </p>
          </>
        )}
      </div>
    </>
  )
}
