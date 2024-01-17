import { HttpErrorResponse } from 'response';
import ErrorBase from './error-base';

export class HttpError extends ErrorBase {
  status: HttpErrorResponse['status'];

  constructor({ status, errorMessage }: Omit<HttpErrorResponse, 'type'>) {
    super({ type: 'httpError', errorMessage });
    this.status = status;
  }
}
