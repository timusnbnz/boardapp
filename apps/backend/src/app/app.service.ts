import { Injectable } from '@nestjs/common';

/**
 * Basis-Service für Root-Endpunkt
 */
@Injectable()
export class AppService {
  getHelloWorld(): { message: string } {
    return { message: 'The API is working :)' };
  }
}
