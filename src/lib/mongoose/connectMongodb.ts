import { connect, type ConnectOptions, type Mongoose } from 'mongoose';

const mongodbUri = process.env.MONGODB_URI;

if (!mongodbUri) {
  throw new Error('MONGODB_URI 환경 변수가 존재하지 않습니다');
}

global.monogodb = global.monogodb || {
  connection: null,
  connectionPromise: null,
};

const cachedConnection = global.monogodb;

const connectMongodb = async (): Promise<Mongoose> => {
  if (cachedConnection.connection) {
    return cachedConnection.connection;
  }

  if (!cachedConnection.connectionPromise) {
    const connectOptions: ConnectOptions = {
      bufferCommands: false,
    };

    cachedConnection.connectionPromise = connect(mongodbUri, connectOptions);
  }

  cachedConnection.connection = await cachedConnection.connectionPromise;
  return cachedConnection.connection;
};

export default connectMongodb;
