import React from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import { IAddDashboard } from '../../../types/AddDashboard/AddDahboard';
import { ControlledTextField } from '../../UI/ControlledTextField/ControlledTextField';
import { ControlledAutoCompleteSelect } from '../../UI/ControlledAutoCompleteSelect/ControlledAutoCompleteSelect';
import { useMutation, useQueryClient } from 'react-query';
import { dashboardApi } from '../../../api/dashboard';
import { useToast } from '../../../hooks/useToast';
import { v4 as uuidv4 } from 'uuid';

type IModalAddDashboard = IAddDashboard & {
  open: boolean;
  users: any;
  setOpen: (open: boolean) => void;
};

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export const ModalAddDashboard: React.FC<IModalAddDashboard> = ({
  open,
  users,
  setOpen,
  errors,
  control,
  handleSubmit,
  reset,
}) => {
  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const { successToast } = useToast();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(`create-dashboard-${uuidv4()}`, dashboardApi.postDashboardData, {
    onSuccess: () => {
      handleClose();
      queryClient.invalidateQueries('dashboards-initial');
      successToast('Dashboard saved');
    },
  });
  const onSubmit = (data: any) => {
    mutate(data);
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add new Dashboard
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <ControlledTextField
              sx={{ mb: '2rem', mt: '1rem' }}
              label="Title"
              errors={errors?.title}
              name="title"
              InputLabelProps={{ shrink: true }}
              control={control}
            />
            <ControlledTextField
              sx={{ mb: '2rem' }}
              label="Description"
              errors={errors?.description}
              name="description"
              InputLabelProps={{ shrink: true }}
              control={control}
            />
            <ControlledAutoCompleteSelect
              control={control}
              sx={{ mb: '2rem' }}
              label="Users"
              filterBy="username"
              options={users}
              name="users"
              placeholder="Please choose users to your dashboard"
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '0.8rem' }}>
            <Button color="primary" variant="outlined" onClick={handleSubmit(onSubmit)}>
              Create
            </Button>
            <Button color="secondary" variant="outlined" onClick={handleClose}>
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};
