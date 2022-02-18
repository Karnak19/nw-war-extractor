import { Link } from 'react-location';
import { client, useCompaniesQuery } from '../graphql';

function Companies() {
  const { data, isLoading, error } = useCompaniesQuery(client);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  return (
    <div>
      {data!.companies.map((comp) => {
        return (
          <div key={comp.id}>
            <Link to={comp.id}>{comp.name}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Companies;
