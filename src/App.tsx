import { DifficultySelector } from "./components/DifficultySelector"

function App() {
  const levels = ['easy', 'medium', 'normal', 'expert'];
  const onDS = (level: string) => {
    console.log(level);
  };

  return (
    <>
      <DifficultySelector levels={levels} classNames="bg-gds" callback={onDS} />
    </>
  )
}

export default App
