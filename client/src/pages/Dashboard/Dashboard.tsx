import { DashboardHeader } from '../../components/Dashboard/DashboardHeader/DashboardHeader';
import { FilterOptions } from '../../components/Dashboard/FilterOptions/FilterOptions';
import { TaskBoard } from '../../components/Dashboard/TaskBoard/TaskBoard';

export const Dashboard = () => (
  <>
    <DashboardHeader />
    <FilterOptions />
    <TaskBoard />
  </>
);
