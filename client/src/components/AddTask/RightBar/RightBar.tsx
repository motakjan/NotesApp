import { Typography, Box } from '@mui/material';
import { Control } from 'react-hook-form';
import { DropzoneFileInput } from '../../UI/Dropzone/DropzoneFileInput';
import { ShadowedContainer } from '../../UI/ShadowedContainer/ShadowedContainer';

interface IRightBar {
  control: Control<any>;
}

export const RightBar: React.FC<IRightBar> = ({ control }) => (
  <Box>
    <ShadowedContainer sx={{ minHeight: 'fit-content', mt: 2 }}>
      <Typography component="h1" variant="h5">
        Additional Files
      </Typography>
      <DropzoneFileInput control={control} name="dropzone" />
    </ShadowedContainer>
  </Box>
);
