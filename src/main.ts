import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const temp = await NestFactory.create(AppModule);
  const conf = temp.get(ConfigService);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'handphone',
        protoPath: conf.get<string>('PROTO_PATH'),
        url: `${conf.get<string>('URL')}:${conf.get<string>('PORT')}`,
        loader: { keepCase: true },
      },
    },
  );
  await app.listen();
}
bootstrap();
