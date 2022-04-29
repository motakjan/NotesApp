import { object, string, TypeOf } from 'zod';
import mongoose from 'mongoose';

export const actionOneSchema = {
  params: object({
    id: string({
      required_error: 'Id is required',
    }),
  }).refine(data => mongoose.Types.ObjectId.isValid(data.id), { path: ['id'], message: 'Invalid mongoose ObjectID' }),
};

export const createOneSchema = {
  body: object({
    username: string({
      required_error: 'username is required',
    }),
  }),
};

export const updateOneSchema = {
  params: object({
    id: string({
      required_error: 'Id is required',
    }),
  }).refine(data => mongoose.Types.ObjectId.isValid(data.id), { path: ['id'], message: 'Invalid ObjectID' }),
  body: object({
    username: string({
      required_error: 'username is required',
    }),
  }),
};

export type TActionOneParams = TypeOf<typeof actionOneSchema.params>;
export type TCreateOneBody = TypeOf<typeof createOneSchema.body>;
export type TUpdateOneParams = TypeOf<typeof updateOneSchema.params>;
export type TUpdateOneBody = TypeOf<typeof updateOneSchema.body>;