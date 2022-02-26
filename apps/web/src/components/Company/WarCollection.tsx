import { useMatch, useNavigate } from 'react-location';
import { CompanyQuery } from '../../graphql';
import War from '../War/War';

interface IProps {
  wars: CompanyQuery['companyWars'];
}

function WarCollection({ wars }: IProps) {
  const { params } = useMatch();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-center text-3xl uppercase">Wars</h2>
      <div className="flex flex-col gap-2">
        {wars.map((war) => {
          return (
            <div
              className="flex cursor-pointer justify-center"
              key={war.id}
              onClick={() => navigate({ to: `wars/${war.id}` })}
            >
              <War
                className="w-full"
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
      </div>
    </div>
  );
}

export default WarCollection;
