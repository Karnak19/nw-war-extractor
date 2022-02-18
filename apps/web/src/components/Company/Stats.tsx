import {
  LightningBoltIcon,
  UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/outline';
import { Link } from 'react-location';

function Stats({
  warCount,
  playerCount,
}: {
  warCount: number;
  playerCount: number;
}) {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-title">Members</div>
        <div className="stat-value text-primary">{playerCount}</div>
        <div className="stat-actions">
          <Link to="members" className="btn-outline btn btn-accent btn-sm">
            See members
          </Link>
        </div>
      </div>

      <div className="stat">
        <div className="stat-title">War registered</div>
        <div className="stat-value text-primary">{warCount}</div>
        <div className="stat-actions flex gap-2">
          <Link to="wars" className="btn-outline btn btn-accent btn-sm">
            List
          </Link>

          <Link to="wars/new" className="btn-outline btn btn-primary btn-sm">
            Upload new
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Stats;
