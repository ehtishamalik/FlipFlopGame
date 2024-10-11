import { ScoreTableProps } from './types';

export function ScoreTable({ scores }: ScoreTableProps) {
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
            {scores.map((score, index) => {
              return (
                <tr className="scoretable__table--row">
                  <td className="scoretable__table--cell">{index + 1}</td>
                  <td className="scoretable__table--cell">{score.username}</td>
                  <td className="scoretable__table--cell">
                    {score.movesCount}
                  </td>
                  <td className="scoretable__table--cell">{score.time}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
