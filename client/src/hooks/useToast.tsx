import { toast } from 'react-toastify';

export const useToast = () => {
  const TOAST_SETTINGS: any = {
    position: 'bottom-left',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  };

  const errorToast = (toastText: string) => toast.error(toastText, TOAST_SETTINGS);
  const warnToast = (toastText: string) => toast.warn(toastText, TOAST_SETTINGS);
  const successToast = (toastText: string) => toast.success(toastText, TOAST_SETTINGS);
  const infoToast = (toastText: string) => toast.info(toastText, TOAST_SETTINGS);
  const defaultToast = (toastText: string) => toast(toastText, TOAST_SETTINGS);

  return { errorToast, warnToast, successToast, infoToast, defaultToast };
};
