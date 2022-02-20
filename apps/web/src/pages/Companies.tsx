import { Link } from 'react-location';
import Container from '../components/Container';
import { client, useCompaniesQuery } from '../graphql';

function Companies() {
  const { data, isLoading, error } = useCompaniesQuery(
    client,
    {},
    {
      staleTime: 60,
    },
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  return (
    <div className="grid grid-cols-1 place-items-center gap-3 lg:grid-cols-3">
      {data!.companies.map((comp) => {
        return (
          <Link
            className="btn-outline btn btn-primary glass btn-block"
            to={comp.id}
            key={comp.id}
          >
            {comp.name}
          </Link>
        );
      })}
    </div>
  );
}

export default Companies;
