import { Grid } from '@mui/material';
import { MainBar } from '../../components/AddTask/MainBar/MainBar';
import { RightBar } from '../../components/AddTask/RightBar/RightBar';

export const AddTask = () => (
  <Grid container spacing={3}>
    <Grid item md={10} xs={12}>
      <MainBar />
    </Grid>
    <Grid item md={2} xs={12}>
      <RightBar />
    </Grid>
  </Grid>
);
