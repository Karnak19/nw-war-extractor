import clsx from 'clsx';
import React from 'react';
import { useMatch } from 'react-location';
import { CompanyWarsQuery } from '../../graphql';

type IProps = CompanyWarsQuery['companyWars'][number] & {
  totalDmg: number;
  totalHealing: number;
  className?: string;
};

function War({
  totalDmg,
  totalHealing,
  attacker,
  winner,
  defender,
  createdAt,
  className = 'w-2/3',
}: IProps) {
  const { params } = useMatch();

  const type = params.id === attacker.id ? 'attack' : 'defense';
  const won = params.id === winner.id;

  return (
    <div
      className={clsx(
        'stats grid shadow transition-colors lg:grid-cols-3',
        {
          'bg-success hover:bg-success/70': won,
          'bg-warning hover:bg-warning/70': !won,
        },
        className,
      )}
    >
      <div className="stat">
        <div className={clsx('stat-value', {})}>{type.toUpperCase()}</div>
        <div className="stat-desc">
          VS{' '}
          <span className="text-white">
            {type === 'attack' ? defender.name : attacker.name}
          </span>
        </div>
        <div className="stat-desc">
          {new Intl.DateTimeFormat(navigator.language).format(
            new Date(Number(createdAt)),
          )}
        </div>
      </div>

      <div className=" hidden lg:stat">
        <div className="stat-title">Damage</div>
        <div className="stat-value">{totalDmg.toLocaleString()}</div>
      </div>

      <div className="hidden lg:stat">
        <div className="stat-title">Healing</div>
        <div className="stat-value">{totalHealing.toLocaleString()}</div>
      </div>
    </div>
  );
}

export default War;
