declare module 'response' {
  interface ErrorResponse {
    status: 'error';
    errorMessage: string;
  }

  interface HttpErrorResponse extends ErrorResponse {
    status: 'error';
    errorCode: string;
    errorMessage: string;
  }
}
