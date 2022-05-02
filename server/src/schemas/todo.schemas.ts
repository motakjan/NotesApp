import * as yup from 'yup';
import mongoose from 'mongoose';

const createUpdateBodyYup = yup.object({
  title: yup.string().min(3).max(20).required(),
  description: yup.string().min(3).max(500).required(),
  tags: yup.array().of(
    yup.object().shape({
      tagType: yup.string().oneOf(['event', 'basic', 'notification']),
      tagText: yup.string().min(3).max(20).required(),
    })
  ),
  start: yup.date(),
  end: yup.date(),
  priority: yup.number().oneOf([1, 2, 3, 4, 5]),
  users: yup
    .array()
    .of(yup.string().test('invalid_id', 'Invalid User ID', (id: any) => mongoose.Types.ObjectId.isValid(id))),
});

export const actionOneSchema = yup.object({
  params: yup.object({
    id: yup
      .string()
      .test('invalid_id', 'Invalid Todo ID', (id: any) => mongoose.Types.ObjectId.isValid(id))
      .required(),
  }),
});

export const createOneSchema = yup.object({
  body: createUpdateBodyYup,
});

export const updateOneSchema = yup.object({
  params: yup.object({
    id: yup
      .string()
      .test('invalid_id', 'Invalid Todo ID', (id: any) => mongoose.Types.ObjectId.isValid(id))
      .required(),
  }),
  body: createUpdateBodyYup,
});
