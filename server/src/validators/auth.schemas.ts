import * as yup from 'yup';

export const loginSchema = yup.object({
  body: yup.object({
    username: yup.string().min(3).max(18),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(20).required(),
  }),
});

export const registerSchema = yup.object({
  body: yup.object({
    username: yup.string().min(3).max(18).required(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(8)
      .max(20)
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        'Password must Contain 8 Characters, one uppercase, one lowercase, one number and one special case character'
      ),
    name: yup.object().shape({
      first: yup.string().max(100).required(),
      last: yup.string().max(100).required(),
    }),
    profilePicture: yup.string(),
  }),
});
