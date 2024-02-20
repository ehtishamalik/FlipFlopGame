import { FlipFlopGame } from './components/FlipFlopGame'
import { Header } from './components/Header'
import { InputField } from './components/InputField'
import { LeaderBoard } from './components/LeaderBoard'

function App() {
  return (
    <>
      <section className='animal-memory'>
        <div className='container'>
          <Header headerLabel='animal memory' />
          <InputField />
          <FlipFlopGame />
        </div>
        <div className='leaderboard'>
          <h1>leaderboard</h1>
          <LeaderBoard />
        </div>
      </section>
    </>
  )
}

export default App
