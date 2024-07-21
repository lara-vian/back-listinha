import { HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  helthCheck() {
    return {
      status: HttpStatus.OK,
      message: 'Working fine',
    };
  }
}
