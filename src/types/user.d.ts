declare module 'user' {
  interface User {
    id: number;
    username: string;
    githubUrl: string;
    links: string[];
    email?: string;
    introduce?: string;
  }
}
