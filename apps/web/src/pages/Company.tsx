import { useMatch } from 'react-location';
import Stats from '../components/Company/Stats';
import { client, useCompanyQuery } from '../graphql';

function Company() {
  const { params } = useMatch();

  const { data, error, isLoading } = useCompanyQuery(client, {
    id: params.id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <div className="container mx-auto mt-3 flex flex-col gap-5">
      <div className="flex justify-center">
        <h1 className="text-5xl font-bold">{data?.company?.name}</h1>
      </div>
      <div className="flex w-full justify-center">
        <Stats
          playerCount={data?.company?.characters.length || 0}
          warCount={24}
        />
      </div>
      <div></div>
    </div>
  );
}

export default Company;
