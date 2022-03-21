export const generateErrorObject = (type: string, message: string) => ({
    errors: {
      [type]: { message },
    },
  });

export const validatePassword = (password: string) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/.test(password);
