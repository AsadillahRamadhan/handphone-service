import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { HandphoneService } from './handphone.service';
import { Handphone, HandphoneSchema } from './schema/handphone.schema';
import { HandphoneController } from './handphone.controller';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/handphone-joohaa'),
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forFeature([
      { name: Handphone.name, schema: HandphoneSchema },
    ]),
  ],
  controllers: [AppController, HandphoneController],
  providers: [AppService, HandphoneService],
})
export class AppModule {}
