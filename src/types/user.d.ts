declare module 'user' {
  interface UserResponse {
    id: number;
    username: string;
    githubUrl: string;
  }

  interface User extends UserResponse {
    links: Array<{ label: string; url: string }>;
    email?: string;
    introduce?: string;
  }
}
