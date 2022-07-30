import { Box } from '@mui/material';
import { DropzoneFileInput } from '../../UI/Dropzone/DropzoneFileInput';
import { NappPersonModal } from '../../UI/Modals/NappPersonModal';
import { IRightBar } from '../../../types/AddTask/addTaskTypes';
import { RightBarCard } from './RightBarCard/RightBarCard';
import { NappList } from '../../UI/NappList/NappList';
import { useState } from 'react';

const PEOPLE_MOCK_DATA = [
  {
    id: 1,
    mainText: 'John Doe',
    email: 'john@mail.google.com',
    secondaryText: 'Role slabý jedinec',
    avatar: { src: 'https://avatars.dicebear.com/api/identicon/yaroslav.svg', alt: 'yaroslav avatar' },
  },
  {
    id: 2,
    mainText: 'Jane Doe',
    email: 'john@mail.google.com',
    secondaryText: 'Role slabý jedinec',
    avatar: {
      src: 'https://globalnews.ca/wp-content/uploads/2017/05/oldestmanthumb.jpg?quality=85&strip=all&w=720&h=379&crop=1',
      alt: 'honza avatar',
    },
  },
  {
    id: 3,
    mainText: 'Jane Doe',
    email: 'john@mail.google.com',
    secondaryText: 'Role slabý jedinec',
    avatar: { src: 'https://avatars.dicebear.com/api/avataaars/michal.svg', alt: 'michal avatar' },
  },
  {
    id: 4,
    mainText: 'Jane Doe',
    email: 'john@mail.google.com',
    secondaryText: 'Role slabý jedinec',
    avatar: { src: 'https://avatars.dicebear.com/api/avataaars/kokos.svg', alt: 'kokos avatar' },
  },
];

export const RightBar: React.FC<IRightBar> = ({ control }) => {
  const [userListData, _setUserListData] = useState(PEOPLE_MOCK_DATA);
  const [selectedUsers, setSelectedUsers] = useState([]);
  // https://stackoverflow.com/questions/48919320/react-how-to-pass-props-to-a-component-passed-as-prop
  return (
    <Box>
      <RightBarCard title="Add People">
        <NappList setSelectedUsers={setSelectedUsers} data={selectedUsers} more deletable />
        <NappPersonModal
          buttonText="Select People"
          selectedUsers={selectedUsers}
          buttonSize="small"
          buttonSx={{ width: '100%', marginTop: 2 }}
          setSelectedUsers={setSelectedUsers}
          userListData={userListData}
        />
      </RightBarCard>
      <RightBarCard title="Additional Files">
        <DropzoneFileInput control={control} name="dropzone" />
      </RightBarCard>
    </Box>
  );
};