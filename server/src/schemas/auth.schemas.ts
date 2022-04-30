import { object, string, TypeOf } from 'zod';

export const loginUserSchema = {
  body: object({
    email: string({
      required_error: 'email is required',
    }).email('must be a valid email'),
    password: string({
      required_error: 'password is required',
    })
      .min(6, 'Password must be at least 6 characters long')
      .max(64, 'Password should not be longer than 64 characters'),
  })
};

export const registerUserSchema = {
  body: object({
    username: string({
      required_error: 'username is required',
    }),
    email: string({
      required_error: 'email is required',
    }).email('must be a valid email'),
    password: string({
      required_error: 'password is required',
    })
      .min(6, 'Password must be at least 6 characters long')
      .max(64, 'Password should not be longer than 64 characters'),
    confirmPassword: string({
      required_error: 'confirmed password is required',
    }),
    firstName: string({ required_error: 'firstName is required' }),
    lastName: string({ required_error: 'lastName is required' }),
    image: string().optional(),
  }).refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  }),
};

export type RegisterUserBody = TypeOf<typeof registerUserSchema.body>;
export type LoginUserBody = TypeOf<typeof loginUserSchema.body>;
