import { useMatch } from 'react-location';
import WarStat from '../components/Character/WarStat';
import { client, useCharacterQuery } from '../graphql';

function CompanyMember({}: {}) {
  const { params } = useMatch();

  const { data, isLoading, error } = useCharacterQuery(client, {
    id: params.id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold">
          {data?.character.pseudo.toUpperCase()}
        </h1>
      </div>
      {data?.character.scores
        .sort((a, b) => Number(b.createdAt) - Number(a.createdAt))
        .map((score) => {
          return (
            <div className="flex justify-center" key={score.id}>
              <WarStat
                {...score}
                company={data?.character.company}
                key={score.id}
              />
            </div>
          );
        })}
    </>
  );
}

export default CompanyMember;
