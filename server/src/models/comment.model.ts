import * as mongoose from 'mongoose';

const CommentSchema: any = new mongoose.Schema({
    text: {
      type: String,
    },
    likes: {
      type: Number,
    },
    dislikes: {
      type: Number,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    // each comment can only relates to one blog, so it's not in array
    task: mongoose.Types.ObjectId,

  }, { timestamps: true },
);

const CommentModel = mongoose.model('Card', CommentSchema);

export default CommentModel;