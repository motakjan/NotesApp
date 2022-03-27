import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { TabPanel } from './TabPanel/TabPanel';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const TaskBoardTabsWrapper = ({ boards }: { boards: any }) => {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        textColor="secondary"
        indicatorColor="secondary"
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {boards.map((board: any, index: number) => (
          <Tab sx={{ textTransform: 'none' }} key={`tab-board-${board.id}`} label={board.name} {...a11yProps(index)} />
        ))}
      </Tabs>
      {boards.map((board: any, index: number) => (
        <TabPanel key={`board-in-tab-${board.id}`} value={value} index={index}>
          {board.component}
        </TabPanel>
      ))}
    </>
  );
};
