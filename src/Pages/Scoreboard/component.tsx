import { useDispatch, useSelector } from 'react-redux';
import { ScoreDifficultySelector } from '../../Components/Scoreboard/ScoreDifficultySelector';
import { AppDispatch, RootState, setScoreDifficulty } from '../../store';
import { ScoreTable } from '../../Components/Scoreboard/ScoreTable';
import { useEffect, useState } from 'react';
import { fetchScoreboard } from '../../api';
import { IScore } from '../../types';
import { toast } from 'react-toastify';

export function Scoreboard() {
  const difficulty = useSelector(
    (state: RootState) => state.scoreDifficulty.level
  );

  const [scores, setScores] = useState<IScore[]>([]);
  const dispatch = useDispatch<AppDispatch>();

  const handleFetchScoreboard = async () => {
    const scores = await fetchScoreboard(difficulty);

    if ('type' in scores) {
      toast.error(scores.message);
      return;
    }
    setScores(scores);
  };

  useEffect(() => {
    toast.promise(handleFetchScoreboard, {
      pending: 'Getting scores...',
    });
  }, [difficulty]);

  return (
    <section className="scoreboard">
      <div className="scoreboard__container">
        <ScoreDifficultySelector
          value={difficulty}
          onClickCallback={(level) => {
            dispatch(setScoreDifficulty(level));
          }}
        />
        <ScoreTable scores={scores} />
      </div>
    </section>
  );
}
