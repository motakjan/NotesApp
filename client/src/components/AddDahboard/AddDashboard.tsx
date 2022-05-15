import { useState } from 'react';
import { ModalAddDashboard } from './ModalAddDahboard/ModalAddDashboard';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { DrawerIcon } from '../Layout/DrawerIcon';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDashboardSchema } from '../../utils/schemas/addDashboardSchema';
import { IAddDashboardFormValues } from '../../types/AddDashboard/AddDahboard';
import { useQuery } from 'react-query';
import { usersApi } from '../../api/users';
import { Loading } from '../../pages/Loading/Loading';

const DEFAULT_ADD_DASHBOARD = {
  description: '',
  title: '',
  users: [],
};

export const AddDashboard = () => {
  const [users, setUsers] = useState<any>([]);
  const { status, isLoading, isError } = useQuery('users-Napp', usersApi.getUsersNapp, {
    onSuccess: data => {
      setUsers(data);
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IAddDashboardFormValues>({
    resolver: yupResolver(addDashboardSchema),
    defaultValues: DEFAULT_ADD_DASHBOARD,
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  if (isLoading) return <Loading status={status} />;
  if (isError) return <div>Error...</div>;
  return (
    <>
      <DrawerIcon title="Add Dashboard" onClick={handleOpen} icon={<DashboardCustomizeIcon />} open={open} />
      <ModalAddDashboard
        users={users}
        reset={reset}
        errors={errors}
        handleSubmit={handleSubmit}
        control={control}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
};
