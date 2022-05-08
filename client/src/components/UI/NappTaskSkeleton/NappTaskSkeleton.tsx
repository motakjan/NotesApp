import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export const NappTaskSkeleton = () => (
  <Stack spacing={1}>
    <Skeleton variant="text" />
    <Skeleton variant="rectangular" height={165} />
  </Stack>
);
