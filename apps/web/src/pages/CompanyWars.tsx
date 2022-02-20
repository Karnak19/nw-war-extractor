import clsx from 'clsx';
import { useState } from 'react';
import { useMatch, useNavigate } from 'react-location';
import War from '../components/War/War';
import { client, CompanyWarsQuery, useCompanyWarsQuery } from '../graphql';

type Active = 'attack' | 'defense' | 'all';

function CompanyWars({}: {}) {
  const [active, setActive] = useState<Active>('all');
  const { params } = useMatch();
  const navigate = useNavigate();

  const { data } = useCompanyWarsQuery(client, {
    id: params.id,
  });

  const isAttack = (war: CompanyWarsQuery['companyWars'][number]) => {
    if (war.attacker.id === params.id && active === 'attack') {
      return true;
    }

    if (war.defender.id === params.id && active === 'defense') {
      return true;
    }

    return active === 'all';
  };

  const tab = (activate: Active) => (
    <button
      className={clsx('tab tab-bordered tab-lg transition-colors', {
        'tab-active': active === activate,
      })}
      onClick={() => setActive(activate)}
    >
      {activate.toUpperCase()}
    </button>
  );

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-5xl font-bold">{data?.company?.name} wars</h1>
        <div className="tabs">
          {(['attack', 'all', 'defense'] as Active[]).map((el) => tab(el))}
        </div>
      </div>

      {data?.companyWars.filter(isAttack).map((war) => {
        return (
          <div
            className="flex cursor-pointer justify-center"
            onClick={() => navigate({ to: war.id })}
          >
            <War
              {...war}
              totalDmg={war.scores.reduce((acc, cur) => {
                if (cur.character.company.id !== params.id) {
                  return acc;
                }

                return acc + cur.damage;
              }, 0)}
              totalHealing={war.scores.reduce((acc, cur) => {
                if (cur.character.company.id !== params.id) {
                  return acc;
                }

                return acc + cur.healing;
              }, 0)}
            />
          </div>
        );
      })}
    </>
  );
}

export default CompanyWars;
