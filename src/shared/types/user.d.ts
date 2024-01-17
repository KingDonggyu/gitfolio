declare module 'user' {
  interface ProfileLink {
    label: string;
    url: string;
  }

  interface Profile {
    id: number;
    username: string;
    githubUrl: string;
    links: Array<ProfileLink>;
    email?: string;
    introduce?: string;
  }
}
