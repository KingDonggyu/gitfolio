declare module 'response' {
  interface ErrorResponse {
    type: 'httpError' | 'databaseError';
    errorMessage: string;
  }

  interface HttpErrorResponse extends ErrorResponse {
    status?: number;
  }
}
