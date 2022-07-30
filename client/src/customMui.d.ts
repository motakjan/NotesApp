import '@mui/material/styles/createPalette';
import { TypeCustom, TypeNappPersonModal } from './types/MuiOverride/paletteOverrideTypes';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    custom: TypeCustom;
    nappPersonModal: TypeNappPersonModal;
  }
}

declare module '@mui/material/Snackbar' {
  interface SnackbarProps {
    variant: string;
  }
}