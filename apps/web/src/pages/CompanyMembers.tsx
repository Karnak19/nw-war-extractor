import { Link, useMatch } from 'react-location';
import Spinner from '../components/Spinner';
import { client, useCompanyMembersQuery } from '../graphql';

function CompanyMembers({}: {}) {
  const { params } = useMatch();
  const { data, isLoading, error } = useCompanyMembersQuery(client, {
    id: params.id,
  });

  if (isLoading) return <Spinner />;

  if (error) return <div>Error!</div>;

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold">Members</h1>
      </div>
      <div className="grid grid-cols-1 place-items-center gap-5 lg:grid-cols-3">
        {data?.company?.characters
          .sort((a, b) => a.pseudo.localeCompare(b.pseudo))
          .map((character) => (
            <Link
              to={`${character.id}`}
              key={character.id}
              className="btn btn-primary btn-block btn-sm text-2xl font-bold dark:btn-outline"
            >
              {character.pseudo}
            </Link>
          ))}
      </div>
    </>
  );
}

export default CompanyMembers;
