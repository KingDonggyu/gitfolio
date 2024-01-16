declare module 'user' {
  interface UserResponse {
    id: number;
    username: string;
    githubUrl: string;
  }

  interface User extends UserResponse {
    links: string[];
    email?: string;
    introduce?: string;
  }
}
