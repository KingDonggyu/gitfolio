import { Mongoose } from 'mongoose';

declare namespace NodeJS {
  interface ProcessEnv {
    // client
    NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID: string;

    // server
    GITHUB_OAUTH_CLIENT_SECRET: string;
    MONGODB_URI: string;
  }
}
