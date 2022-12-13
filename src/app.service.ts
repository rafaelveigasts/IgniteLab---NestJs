import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly appService: AppService) {}
  getHello(): string {
    return this.appService.getHello();
  }
}
