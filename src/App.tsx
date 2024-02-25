import { FlipFlopGame } from './components/FlipFlopGame'
import { Timer } from './components/Timer'
import { InputField } from './components/InputField'
import { LeaderBoard } from './components/LeaderBoard'
import { useState } from 'react'

function App() {
  const [userName, setUserName] = useState<string | null>(null)
  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)

  return (
    <section className='animal-memory'>
      <div className='container'>
        <header className='header'>
          <h1>animal memory</h1>
        </header>
        <div className='fields'>
          <InputField callback={setUserName} />
          <Timer isActive={isTimerActive} />
        </div>
        <FlipFlopGame
          userName={userName}
          onLevelChange={(level) => {
            setIsTimerActive(false)
            setTimeout(() => {
              setIsTimerActive(level != null)
            }, 500)
          }}
        />
      </div>
      <LeaderBoard header='leaderboard' />
    </section>
  )
}

export default App
