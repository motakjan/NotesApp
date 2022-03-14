import * as mongoose from 'mongoose';

const TaskSchema:any = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    tags: [{
     type: String,
     text: String,
    }],
    start:{
      type: Date,
    },
    end:{
      type: Date,
    },
    priority:{
      type: Number,
    },
    users: [String],
  },
  { timestamps: true }
);


const TaskModel = mongoose.model('Card', TaskSchema);

export default TaskModel;