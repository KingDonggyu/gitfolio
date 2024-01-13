import { Mongoose } from 'mongoose';

declare global {
  var monogodb:
    | {
        connection: Mongoose | null;
        connectionPromise: Promise<Mongoose> | null;
      }
    | undefined;
}
