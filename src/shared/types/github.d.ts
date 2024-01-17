declare module 'github' {
  /* auth */
  interface GitHubLoginRequest {
    code: string;
    client_id: string;
    client_secret: string;
  }

  interface GitHubLoginSuccessResponse {
    access_token: string;
    token_type: 'bearer';
    scope: string;
  }

  interface GitHubLoginErrorResponse {
    error: string;
    error_description: string;
    error_uri: string;
  }

  type GitHubLoginResponse = GitHubLoginSuccessResponse | GitHubLoginErrorResponse;

  /* user */
  interface GitHubUserResponse {
    id: number;
    login: string;
    html_url: string;
    blog: string | null;
    email: string | null;
    bio: string | null;
  }
}
