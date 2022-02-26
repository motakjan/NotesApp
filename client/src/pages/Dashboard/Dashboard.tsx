import { TaskCard } from '../../components/Dashboard/TaskCard/TaskCard';

export const Dashboard = () => (
  <div>
    <TaskCard
      title="Uklidit Doma"
      tags={[{
        name: 'Testing',
        color: 'info',
        type: 'tag',
      },{
        name: 'Testing',
        color: 'warning',
        type: 'filledTag',
      }]}
      from="9:00"
      to="10:30"
      priority={2}
    />
  </div>
)
 
