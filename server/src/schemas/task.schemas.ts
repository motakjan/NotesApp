import { array, number, object, string, TypeOf } from 'zod';
import mongoose from 'mongoose';

const VALUES = ['event', 'basic', 'notification'];
const PRIORITY = [1, 2, 3, 4, 5];

// check if string is valid date format
const isValidDate = (date: string) => !Number.isNaN(new Date(date).getDate());

export const createUpdateBodySchema = {
  title: string({ required_error: 'title is required' }).min(3).max(20),
  description: string({ required_error: 'description is required' }).min(3).max(500),
  tags: array(
    object({
      tagType: string().refine((el: string) => VALUES.includes(el), {
        path: ['tagType'],
        message: 'Invalid TagType',
      }),
      tagText: string({
        required_error: 'tagText is required',
      })
        .min(3)
        .max(20),
    })
  ),
  start: string()
    .refine(el => isValidDate(el), {
      path: ['start'],
      message: 'Invalid start date',
    })
    .optional(),
  end: string()
    .refine(el => isValidDate(el), {
      path: ['end'],
      message: 'Invalid end date',
    })
    .optional(),
  priority: number().refine((el: number) => PRIORITY.includes(el), {
    path: ['priority'],
    message: 'Invalid priority type please choose from [1,2,3,4,5]',
  }),
  users: array(
    string().refine(user => mongoose.Types.ObjectId.isValid(user), { path: ['id'], message: 'Invalid ObjectID' })
  ),
};

export const actionOneSchema = {
  params: object({
    id: string({
      required_error: 'Id is required',
    }),
  }).refine(data => mongoose.Types.ObjectId.isValid(data.id), { path: ['id'], message: 'Invalid ObjectID' }),
};

export const createOneSchema = {
  body: object(createUpdateBodySchema),
};

export const updateOneSchema = {
  params: object({
    id: string({
      required_error: 'Id is required',
    }),
  }).refine(data => mongoose.Types.ObjectId.isValid(data.id), { path: ['id'], message: 'Invalid ObjectID' }),
  body: object(createUpdateBodySchema),
};

export type TActionOneParams = TypeOf<typeof actionOneSchema.params>;
export type TCreateOneBody = TypeOf<typeof createOneSchema.body>;
export type TUpdateOneParams = TypeOf<typeof updateOneSchema.params>;
export type TUpdateOneBody = TypeOf<typeof updateOneSchema.body>;
