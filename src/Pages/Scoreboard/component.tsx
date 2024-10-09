import { useDispatch, useSelector } from 'react-redux';
import { ScoreDifficultySelector } from '../../Components/Scoreboard/ScoreDifficultySelector';
import { AppDispatch, RootState, setScoreDifficulty } from '../../store';

export function Scoreboard() {
  const difficulty = useSelector(
    (state: RootState) => state.scoreDifficulty.level
  );
  const dispatch = useDispatch<AppDispatch>();
  return (
    <section className="scoreboard">
      <div className="scoreboard__container">
        <ScoreDifficultySelector
          value={difficulty}
          onClickCallback={(level) => {
            dispatch(setScoreDifficulty(level));
          }}
        />
      </div>
    </section>
  );
}
