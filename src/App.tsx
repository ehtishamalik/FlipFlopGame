import { FlipFlopGame } from './components/FlipFlopGame'
import { Timer } from './components/Timer'
import { InputField } from './components/InputField'
import { LeaderBoard } from './components/LeaderBoard'
import { useState } from 'react'

function App() {
  const [userName, setUserName] = useState<string | null>(null)
  return (
    <>
      <section className='animal-memory'>
        <div className='container'>
          <header className='header'>
            <h1>animal memory</h1>
          </header>
          <div className='fields'>
            <InputField callback={setUserName} />
            <Timer />
          </div>
          <FlipFlopGame userName={userName} />
        </div>
        <LeaderBoard header='leaderboard' />
      </section>
    </>
  )
}

export default App
