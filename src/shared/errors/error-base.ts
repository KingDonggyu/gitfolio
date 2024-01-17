import { ErrorResponse } from 'response';

class ErrorBase extends Error {
  type: ErrorResponse['type'];
  errorMessage: ErrorResponse['errorMessage'];

  constructor({ type, errorMessage }: ErrorResponse) {
    super(`[${type}] ${errorMessage}`);
    this.type = type;
    this.errorMessage = errorMessage;
  }
}

export default ErrorBase;
