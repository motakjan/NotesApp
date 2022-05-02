import * as mongoose from 'mongoose';

const TodoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    tags: [
      {
        tagType: String,
        tagText: String,
      },
    ],
    start: {
      type: Date,
    },
    end: {
      type: Date,
    },
    priority: {
      type: Number,
    },
    users: [String],
  },
  { timestamps: true }
);

const TodoModel = mongoose.model('Todo', TodoSchema);

export default TodoModel;
