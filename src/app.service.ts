import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): {} {
    return { message: 'Hello World!' };
  }

  async uploadToFirebase(body: any) {
    console.log('body', body);
    return null;
  }
}
