import { TypeOf, array, object, string, number } from 'zod';

import mongoose from 'mongoose';

export const actionOneSchema = {
  params: object({
    id: string({
      required_error: 'Id is required',
    }),
  }).refine(data => mongoose.Types.ObjectId.isValid(data.id), {
    path: ['id'],
    message: 'Invalid mongoose ObjectID in params',
  }),
};

export const createOneSchema = {
  body: object({
    title: string({
      required_error: 'title is required',
    }),
    description: string({
      required_error: 'title is required',
    }),
    users: array(
      string().refine(user => mongoose.Types.ObjectId.isValid(user), {
        path: ['id'],
        message: 'Invalid ObjectID in users array',
      })
    ).optional(),
    tasks: array(
      object({
        id: string({
          required_error: 'id is required',
        }).refine(user => mongoose.Types.ObjectId.isValid(user), {
          path: ['id'],
          message: 'Invalid ObjectID in tasks array',
        }),
        position: number().optional(),
        column: number().optional(),
      })
    ).optional(),
  }),
};

export const updateOneSchema = {
  params: object({
    id: string({
      required_error: 'Id is required',
    }),
  }).refine(data => mongoose.Types.ObjectId.isValid(data.id), { path: ['id'], message: 'Invalid ObjectID in params' }),
  body: object({
    title: string().optional(),
    description: string().optional(),
    users: array(
      string().refine(user => mongoose.Types.ObjectId.isValid(user), {
        path: ['id'],
        message: 'Invalid ObjectID in users array',
      })
    ).optional(),
    tasks: array(
      object({
        id: string({
          required_error: 'id is required',
        }).refine(user => mongoose.Types.ObjectId.isValid(user), {
          path: ['id'],
          message: 'Invalid ObjectID in tasks array',
        }),
        position: number().optional(),
        column: number().optional(),
      })
    ).optional(),
  }),
};

export type TActionOneParams = TypeOf<typeof actionOneSchema.params>;
export type TCreateOneBody = TypeOf<typeof createOneSchema.body>;
export type TUpdateOneParams = TypeOf<typeof updateOneSchema.params>;
export type TUpdateOneBody = TypeOf<typeof updateOneSchema.body>;
