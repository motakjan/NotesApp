import { Typography, Box, Divider } from '@mui/material';
import { Control } from 'react-hook-form';
import { DropzoneFileInput } from '../../UI/Dropzone/DropzoneFileInput';
import { NappPersonModal } from '../../UI/Modals/NappPersonModal';
import { ShadowedContainer } from '../../UI/ShadowedContainer/ShadowedContainer';

interface IRightBar {
  control: Control<any>;
}

export const RightBar: React.FC<IRightBar> = ({ control }) => (
  <Box>
    <ShadowedContainer sx={{ minHeight: 'fit-content', mt: 2 }}>
      <Typography component="h2" variant="subtitle1">
        Add People
      </Typography>
      <Divider />
      <NappPersonModal buttonText="Select People" buttonSx={{ width: '100%', marginTop: 2 }} buttonSize="small" />
    </ShadowedContainer>
    <ShadowedContainer sx={{ minHeight: 'fit-content', mt: 2, maxHeight: '30rem', overflow: 'auto' }}>
      <Typography component="h2" variant="subtitle1">
        Additional Files
      </Typography>
      <Divider />
      <DropzoneFileInput control={control} name="dropzone" />
    </ShadowedContainer>
  </Box>
);
