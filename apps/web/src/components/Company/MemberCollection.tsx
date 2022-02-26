import Fuse from 'fuse.js';
import { useMemo, useState } from 'react';
import { Link } from 'react-location';
import { CompanyQuery } from '../../graphql';

type IProps = {
  characters: NonNullable<CompanyQuery['company']>['characters'];
};

function MemberCollection({ characters }: IProps) {
  const [search, setSearch] = useState('');

  const fuse = useMemo(
    () =>
      new Fuse(characters, {
        keys: ['pseudo'],
        minMatchCharLength: 2,
      }),
    [characters],
  );

  const fuzzyResults = fuse.search(search).map(({ item: character }) => {
    return (
      <div className="w-1/2 p-2" key={character.id}>
        <Link
          to={`members/${character.id}`}
          key={character.id}
          className="btn btn-primary btn-block text-lg font-bold dark:btn-outline"
        >
          {character.pseudo}
        </Link>
      </div>
    );
  });

  const results = characters.map((character) => {
    return (
      <div className="w-1/2 p-2" key={character.id}>
        <Link
          to={`members/${character.id}`}
          key={character.id}
          className="btn btn-primary btn-block text-lg font-bold dark:btn-outline"
        >
          {character.pseudo}
        </Link>
      </div>
    );
  });

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-center text-3xl uppercase">Members</h2>
      <div className="flex justify-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search…"
          className="input-bordered input"
        />
      </div>
      <div className="flex flex-wrap">{search ? fuzzyResults : results}</div>
    </div>
  );
}

export default MemberCollection;
