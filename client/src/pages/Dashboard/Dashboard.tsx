import { DashboardHeader } from '../../components/Dashboard/DashboardHeader/DashboardHeader';
import { FilterOptions } from '../../components/Dashboard/FilterOptions/FilterOptions';
import { TaskBoard } from '../../components/Dashboard/TaskBoard/TaskBoard';
import { TaskBoardTabsWrapper } from '../../components/Dashboard/TaskBoardTabsWrapper/TaskBoardTabsWrapper';

const BOARDS = [
  { id: 1, component: <TaskBoard />, name: 'Main Dashboard' },
  { id: 2, component: <TaskBoard />, name: 'Secondary Dashboard' },
];

export const Dashboard = () => (
  <>
    <DashboardHeader />
    <FilterOptions />
    <TaskBoardTabsWrapper boards={BOARDS} />
  </>
);
