import { SportsCricketTwoTone } from '@mui/icons-material';
import { Button, Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { IDashboard, ITaskBoardTabsWrapper } from '../../../types/Dashboard';
import { DashboardHeader } from '../DashboardHeader/DashboardHeader';
import { FilterOptions } from '../FilterOptions/FilterOptions';
import { TaskBoard } from '../TaskBoard/TaskBoard';
import { TabPanel } from './TabPanel/TabPanel';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const TaskBoardTabsWrapper: React.FC<ITaskBoardTabsWrapper> = ({ boards }) => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Tabs
          textColor="secondary"
          indicatorColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ mb: 2 }}
        >
          {boards?.map((board: IDashboard, index: number) => (
            <Tab
              sx={{ textTransform: 'none', pl: 2 }}
              key={`tab-board-${board._id}`}
              label={board.title}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
      </Box>
      <DashboardHeader title={boards![value].title} description={boards![value].description} />
      <FilterOptions />
      {boards?.map((board: IDashboard, index: number) => (
        <TabPanel key={`board-in-tab-${board._id}`} value={value} index={index}>
          <TaskBoard board={board} />
        </TabPanel>
      ))}
    </>
  );
};
