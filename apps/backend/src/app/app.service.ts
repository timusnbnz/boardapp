import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHelloWorld(): { message: string } {
    return { message: 'The API is working :)' };
  }
}
