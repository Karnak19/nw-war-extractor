import Fuse from 'fuse.js';
import { useMemo, useState } from 'react';
import { Link } from 'react-location';
import Spinner from '../components/Spinner';
import { client, useCompaniesQuery } from '../graphql';

function Companies() {
  const [search, setSearch] = useState('');

  const { data, isLoading, error } = useCompaniesQuery(client, {});

  const fuse = useMemo(
    () =>
      new Fuse(data?.companies || [], {
        keys: ['name'],
      }),
    [data],
  );

  const fuzzyResults = fuse.search(search).map(({ item: comp }) => {
    return (
      <Link
        className="btn-outline btn btn-primary btn-block"
        to={comp.id}
        key={comp.id}
      >
        {comp.name}
      </Link>
    );
  });

  const results = data?.companies.map((comp) => {
    return (
      <Link
        className="btn-outline btn btn-primary btn-block"
        to={comp.id}
        key={comp.id}
      >
        {comp.name}
      </Link>
    );
  });
  if (isLoading) return <Spinner />;

  if (error) return <p>Error</p>;

  return (
    <div className="grid grid-cols-1 place-items-center gap-3 lg:grid-cols-3">
      <form className="col-span-full pb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search…"
          className="input-bordered input"
        />
      </form>

      {search ? fuzzyResults : results}
    </div>
  );
}

export default Companies;
