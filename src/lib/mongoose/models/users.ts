import { Model, Schema, model, models } from 'mongoose';

interface User {
  id: number;
  username: string;
  githubUrl: string;
  links?: string[];
  email?: string;
  introduce?: string;
}

type UserModel = Model<User>;

const userSchema = new Schema<User, UserModel>(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
    },
    githubUrl: {
      type: String,
      required: true,
      unique: true,
    },
    links: {
      type: [String],
      default: [],
    },
    email: {
      type: String,
      trim: true,
    },
    introduce: String,
  },
  {
    timestamps: true,
  }
);

const existingUserModel: UserModel | undefined = models.users;

export default existingUserModel || model<User, UserModel>('users', userSchema);
