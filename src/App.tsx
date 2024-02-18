import { LeaderBoard } from './components/LeaderBoard'

function App() {
  return (
    <>
      <section className='animal-memory'>
        <div className='container'></div>
        <div className='leaderboard'>
          <h1>leaderboard</h1>
          <LeaderBoard />
        </div>
      </section>
    </>
  )
}

export default App
