import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
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
  links: [String],
  email: {
    type: String,
    trim: true,
  },
  introduce: String,
});

export default models.users || model('users', userSchema);
