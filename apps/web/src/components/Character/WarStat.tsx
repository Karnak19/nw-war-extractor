import clsx from 'clsx';
import { CharacterQuery, Score } from '../../graphql';

type IProps = CharacterQuery['character']['scores'][number] & {
  company: CharacterQuery['character']['company'];
};

function WarStat({
  kills,
  deaths,
  assists,
  company,
  war,
  damage,
  healing,
  createdAt,
}: IProps) {
  const type = company.id === war.attacker.id ? 'attack' : 'defense';
  const won = company.id === war.winner.id;

  return (
    <div
      className={clsx(
        'stats grid w-full shadow transition-colors lg:grid-cols-6',
        {
          'bg-success hover:bg-success/70': won,
          'bg-warning hover:bg-warning/70': !won,
        },
      )}
    >
      <div className="stat">
        <div className={clsx('stat-value', {})}>{type.toUpperCase()}</div>
        <div className="stat-desc">
          VS{' '}
          <span className="text-white">
            {type === 'attack' ? war.defender.name : war.attacker.name}
          </span>
        </div>
        <div className="stat-desc">
          {new Intl.DateTimeFormat(navigator.language).format(
            new Date(Number(createdAt)),
          )}
        </div>
      </div>

      <div className="stat">
        <div className="stat-title">Kills</div>
        <div className="stat-value">{kills}</div>
      </div>

      <div className="hidden lg:stat">
        <div className="stat-title">Deaths</div>
        <div className="stat-value">{deaths}</div>
      </div>

      <div className="hidden lg:stat">
        <div className="stat-title">Assists</div>
        <div className="stat-value">{assists}</div>
      </div>

      <div className=" hidden lg:stat">
        <div className="stat-title">Damage</div>
        <div className="stat-value">{damage.toLocaleString()}</div>
      </div>

      <div className="hidden lg:stat">
        <div className="stat-title">Healing</div>
        <div className="stat-value">{healing.toLocaleString()}</div>
      </div>
    </div>
  );
}

export default WarStat;
