import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
  {
    // Outer Todos (box) mei kya kya show hoga woh likha hai
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    //  Kisne aake yeh bada todo create kiya hai
    createdBy: {
      // the below syntax is used for user se reference laane ke liye. Likho and follow karo.
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        //  yaha aaega ek dusre model ka reference
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ],
    //  Array of subTodos
  },
  { timestamps: true }
);

// first - database mei naam kya rakhna hai, second kiske basis pe woh scehma bannau
export const Todo = mongoose.model('Todo', todoSchema);
