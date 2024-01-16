import { Model, Schema, model, models } from 'mongoose';

type Link = { label: string; url: string };

interface User {
  id: number;
  username: string;
  githubUrl: string;
  email?: string;
  introduce?: string;
  links?: Array<Link>;
}

type UserModel = Model<User>;

const linkSchema = new Schema<Link>({
  label: String,
  url: {
    type: String,
    required: true,
  },
});

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
      type: [linkSchema],
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
