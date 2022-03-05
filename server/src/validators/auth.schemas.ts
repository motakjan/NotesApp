import * as yup from 'yup';

export const loginSchema = yup.object({
    username: yup.string().min(3).max(18),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(20).required(),
});