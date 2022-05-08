import { toast } from 'react-toastify';
import { useColorMode } from '../context/ColorModeContext';

export const useToast = () => {
  const { mode } = useColorMode();
  const TOAST_SETTINGS: any = {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: mode,
  };

  const errorToast = (toastText: string) => toast.error(toastText, TOAST_SETTINGS);
  const warnToast = (toastText: string) => toast.warn(toastText, TOAST_SETTINGS);
  const successToast = (toastText: string) => toast.success(toastText, TOAST_SETTINGS);
  const infoToast = (toastText: string) => toast.info(toastText, TOAST_SETTINGS);
  const defaultToast = (toastText: string) => toast(toastText, TOAST_SETTINGS);

  return { errorToast, warnToast, successToast, infoToast, defaultToast };
};
