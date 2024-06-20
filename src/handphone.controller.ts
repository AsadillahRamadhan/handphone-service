import { Controller } from '@nestjs/common';
import { HandphoneService } from './handphone.service';
import { GrpcMethod } from '@nestjs/microservices';
@Controller()
export class HandphoneController {
  constructor(private readonly handphoneService: HandphoneService) {}

  @GrpcMethod('HandphoneService', 'GetAllHandphone')
  getAllHandphone(): any {
    return this.handphoneService.getAllHandphone();
  }

  @GrpcMethod('HandphoneService', 'GetHandphoneByQuery')
  getHandphoneByQuery(data: any): any {
    return this.handphoneService.getHandphoneByQuery(data);
  }

  @GrpcMethod('HandphoneService', 'GetHandphone')
  getHandphone(data: any): any {
    return this.handphoneService.getHandphone(data);
  }
}
