import { StatusCode } from './StatusCode';

export interface Response<T> {
    status: StatusCode;
    response: T;
    success: boolean;
}
