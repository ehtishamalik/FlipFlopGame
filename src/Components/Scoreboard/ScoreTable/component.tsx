import { useNavigate } from 'react-router-dom';
import { Button } from '../../Common/Button';
import { ScoreTableProps } from './types';
import { formatSeconds } from '../../../utils';

export function ScoreTable({ scores }: ScoreTableProps) {
  const navigate = useNavigate();

  const handlePlay = () => {
    navigate('/gamedifficulty');
  };

  return (
    <section className="scoretable">
      <div className="scoretable__container">
        <table className="scoretable__table">
          <thead className="scoretable__table--head">
            <tr className="scoretable__table--header-row">
              <th className="scoretable__table--header-cell">Rank</th>
              <th className="scoretable__table--header-cell">Username</th>
              <th className="scoretable__table--header-cell">Moves Count</th>
              <th className="scoretable__table--header-cell">Time</th>
            </tr>
          </thead>
          <tbody className="scoretable__table--body">
            {scores.length > 0 ? (
              scores.map((score, index) => {
                return (
                  <tr className="scoretable__table--row">
                    <td className="scoretable__table--cell">{index + 1}</td>
                    <td className="scoretable__table--cell">
                      {score.username}
                    </td>
                    <td className="scoretable__table--cell">
                      {score.moves_count}
                    </td>
                    <td className="scoretable__table--cell">
                      {formatSeconds(score.seconds)}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={4}>
                  No scores yet. Wanna{' '}
                  {
                    <Button
                      text="Play"
                      type="tertiary"
                      onClickCallback={handlePlay}
                    />
                  }{' '}
                  ?
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
