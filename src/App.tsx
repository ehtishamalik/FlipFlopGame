import { FlipFlopGame } from './components/FlipFlopGame'
import { Timer } from './components/Timer'
import { InputField } from './components/InputField'
import { LeaderBoard } from './components/LeaderBoard'

function App() {
  return (
    <>
      <section className='animal-memory'>
        <div className='container'>
          <header className='header'>
            <h1>animal memory</h1>
          </header>
          <div className='fields'>
            <InputField />
            <Timer />
          </div>
          <FlipFlopGame />
        </div>
        <LeaderBoard header='leaderboard' />
      </section>
    </>
  )
}

export default App
