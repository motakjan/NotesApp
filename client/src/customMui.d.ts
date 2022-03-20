import '@mui/material/styles/createPalette';
import { TypeCustom } from './types/MuiOverride/paletteOverrideTypes';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    custom: TypeCustom;
  }
}
