import { UserModel } from '@/lib/mongoose/models';
import { UserResponse } from 'user';

export const userService = {
  signup: async ({ id, username, githubUrl }: UserResponse): Promise<void> => {
    const existingUser = await UserModel.findOne({ id: id });

    if (existingUser) {
      return;
    }

    const user = new UserModel({
      id: id,
      username: username,
      githubUrl: githubUrl,
    });

    await user.save();
  },
};
