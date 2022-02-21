import clsx from 'clsx';
import { useState } from 'react';
import { useMatch, useNavigate } from 'react-location';
import { client, useWarDetailsQuery, WarDetailsQuery } from '../graphql';

interface IProps {}

// This doesn't work, don't know why.
// type SortBy = Omit<
//   keyof WarDetailsQuery['war']['scores'][number],
//   '__typename'
// >;

type SortBy =
  | 'rank'
  | 'pseudo'
  | 'score'
  | 'kills'
  | 'deaths'
  | 'assists'
  | 'damage'
  | 'healing';

function CompanyWarDetails({}: IProps) {
  const [sortBy, setSortBy] = useState<SortBy>('rank');

  const navigate = useNavigate();
  const { params } = useMatch();
  const { data, isLoading, error } = useWarDetailsQuery(client, {
    id: params.id,
  });

  const sorts: SortBy[] = [
    'rank',
    'pseudo',
    'score',
    'kills',
    'deaths',
    'assists',
    'damage',
    'healing',
  ];

  if (isLoading) return <div>Loading....</div>;

  if (error) return <div>Error !</div>;

  return (
    <div className="mx-auto overflow-scroll">
      <table className="table">
        <thead>
          <tr>
            {sorts.map((sort) => {
              return (
                <th key={sort} onClick={() => setSortBy(sort)}>
                  {sort}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data?.war.scores
            .sort((a, b) => {
              if (sortBy === 'pseudo') {
                return 0;
              }

              return a[sortBy] - b[sortBy];
            })
            .map((score) => {
              return (
                <tr
                  className={clsx('transition-colors', {
                    'bg-gradient-to-r from-success to-transparent hover:bg-success-content':
                      score.kills > score.deaths,
                    'bg-gradient-to-r from-warning to-transparent hover:bg-warning-content':
                      score.kills === score.deaths,
                    'bg-gradient-to-r from-error to-transparent hover:bg-error-content':
                      score.kills < score.deaths,
                  })}
                >
                  {Object.values(score).map((val) => {
                    if (typeof val === 'object') {
                      return (
                        <td
                          className="cursor-pointer"
                          onClick={() =>
                            navigate({ to: `../../members/${val.id}` })
                          }
                        >
                          {val.pseudo}
                        </td>
                      );
                    }

                    return <td>{val}</td>;
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default CompanyWarDetails;
