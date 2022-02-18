import { useQuery } from 'graphql-hooks';
import { useMatch } from 'react-location';
import { useCompanyQuery } from '../graphql';

function Company() {
  const { params } = useMatch();

  const { data, error, isLoading } = useCompanyQuery({ id: params.id });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return <div>One company</div>;
}

export default Company;
