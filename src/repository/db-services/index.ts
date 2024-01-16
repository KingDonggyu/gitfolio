import connectMongodb from '@/lib/mongoose/connectMongodb';
import { userService } from './user';

const createMonogodbProxy = <T extends Record<string, Function>>(service: T): T => {
  return new Proxy(service, {
    apply: async (service, prop, receiver) => {
      await connectMongodb();
      return Reflect.get(service, prop, receiver);
    },
  });
};

const userDBService = createMonogodbProxy<typeof userService>(userService);

export { userDBService };
