import { useMatch } from 'react-location';

import MemberCollection from '../components/Company/MemberCollection';
import Stats from '../components/Company/Stats';
import WarCollection from '../components/Company/WarCollection';
import Spinner from '../components/Spinner';
import { client, useCompanyQuery } from '../graphql';

function Company() {
  const { params } = useMatch();

  const { data, error, isLoading } = useCompanyQuery(client, {
    id: params.id,
  });

  if (isLoading) return <Spinner />;

  if (error) return <div>Error!</div>;

  return (
    <>
      <div className="flex items-center justify-around">
        <h1 className="text-5xl font-bold text-primary">
          {data?.company?.name}
        </h1>

        <div className="col-span-full grid place-items-center">
          <Stats
            playerCount={data?.company?.characters.length || 0}
            warCount={data?.companyWars.length || 0}
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-2 gap-10">
        <MemberCollection characters={data?.company?.characters || []} />
        <WarCollection wars={data?.companyWars || []} />
      </div>
      <div></div>
    </>
  );
}

export default Company;
